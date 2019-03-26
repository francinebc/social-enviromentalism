const express = require('express')
const router = express()
const db = require('../db/db')
const verifyJwt = require('express-jwt')
const token = require('../auth/token')
const error = require('./error')


router.get('/getChallenges', (req, res) => {
    db.getChallenges()
    .then(data => res.json(data))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

// gets any profile
router.get('/getProfile/:id', (req, res) => {
    db.getProfile(req.params.id)
    .then(data => contractProfile(data))
    .then(data => res.json(data))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

// routes below this need auth
router.use(
    verifyJwt({
      secret: token.getSecret
    }),
    error.authCheckingError
)

router.get('/getFriends/', (req, res) => {
    db.getFriendships(req.user.id)
    .then(friendships => {
        const friends = getFriends(friendships, req.params.userId)
        return db.getUsers(friends)
    })
    .then(data => res.json(data))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

// gets logged in user's profile
router.get('/getUsersProfile', (req, res) => {
    db.getProfile(req.user.id)
    .then(data => contractProfile(data))
    .then(data => res.json(data))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

function getFriends(friendships, userId) {
    return friendships.map(friendship => {
        return (friendship.user_id_1 === userId ? friendship.user_id_1 : friendship.user_id_2)
    })
}

function contractProfile(data) {
    const actions = []
    data.map(action => {
        actions.push({actionId: action.id, description: action.description, actionTypeId: action.action_type_id, image: action.image})
    })
    return {name: data[0].firstName + data[0].lastName, karma: data[0].karma, userId: data[0].user_id, actions}
}

module.exports = router