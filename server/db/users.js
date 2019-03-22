const connection = require('./index')
const {generateHash} = require('../auth/hash')

function registerUser (user, db = connection) {
  return generateHash(user.password)
  .then(hash => {
    delete user.password
    return db('users')
      .insert({...user, hash})
  })
}

function getUser (user, db = connection) {
  return db('users')
    .where('email', user.email)
    .first()
}

module.exports = {
  registerUser,
  getUser
}