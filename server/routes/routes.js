const express = require('express')
const router = express()
const request = require('superagent')
const db = require('../../db')

router.get('/getNews', (req, res) => {
    db.getNews()
    .then(data => res.json(data))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.get('/getChallenges', (req, res) => {
    db.getChallenges()
    .then(data => res.json(data))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.get('/getFriends/:userId', (req, res) => {
    db.getFriendships(req.params.userId)
    .then(friendships => {
        const friends = getFriends(friendships, req.params.userId)
        return db.getUsers(friends)
    })
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

module.exports = router