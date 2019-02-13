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

module.exports = router