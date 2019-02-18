const express = require('express')
const router = express()
const request = require('superagent')

router.get('/reddit/environment', (req, res) => {
  request
    .get(`http://www.reddit.com/r/enviroment.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router