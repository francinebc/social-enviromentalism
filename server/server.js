const path = require('path')
const express = require('express')
const dbRoutes = require('./routes/db')
const redditRoutes = require('./routes/reddit')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1', dbRoutes)
server.use('/api/v1', redditRoutes)

module.exports = server
