const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getNews
}

function getNews(db = connection) {
    return db('news-posts').select()
}