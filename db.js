const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getNews,
  getFriendships,
  getUsers,
  getChallenges
}

function getNews(db = connection) {
  return db('news-posts').select()
}

function getFriendships(userId, db = connection) {
  return db('friendships')
    .where('user_id_1', userId)
    .orWhere('user_id_2', userId)
    .select()
}

function getUsers(users, db = connection) {
  return db('users').whereIn('id', users)
}
  
function getChallenges(db = connection) {
  return db('action-types')
}