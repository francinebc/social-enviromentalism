const path = require('path')
const express = require('express')

const dbRoutes = require('./routes/db')
const redditRoutes = require('./routes/reddit')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1/auth', authRoutes)
server.use('/api/v1', dbRoutes)
server.use('/api/v1', redditRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
