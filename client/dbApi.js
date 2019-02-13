
import request from 'superagent'

const url = 'http://localhost:3000/api/v1'

export function getNews () {
  return request.get(`${url}/getNews`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get news')
    })
}

export function getFriends (userId) {
  return request.get(`${url}/getFriends/${userId}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get news')
    })
}

export function getChallenges () {
  return request.get(`${url}/getChallenges`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get news')
    })
}