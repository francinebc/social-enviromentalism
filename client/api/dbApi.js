
import request from 'superagent'

const url = 'http://localhost:3000/api/v1'
import {getToken} from '../utils/tokens'

export function getFriends () {
  return request.get(`${url}/getFriends/`)
    .set({Authorization: `Bearer ${getToken()}`})
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get friends')
    })
}

export function getChallenges () {
  return request.get(`${url}/getChallenges`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get challenges')
    })
}

export function getProfile (id) {
  return request.get(`${url}/getProfile/${id}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get profile')
    })
}

export function getUsersProfile () {
  return request.get(`${url}/getUsersProfile`)
    .set({Authorization: `Bearer ${getToken()}`})
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get profile')
    })
}