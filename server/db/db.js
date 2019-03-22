const connection = require('./index')


module.exports = {
  getNews,
  getFriendships,
  getUsers,
  getChallenges,
  getProfile
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

function getProfile (id, db = connection) {
  return db('users')
    .join('action-posts', 'users.id', '=', 'action-posts.user_id')
    .where('users.id', id)
}