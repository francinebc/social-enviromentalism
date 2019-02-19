import request from 'superagent'

export const getSubreddit = () => {
  return request
    .get('/api/v1/reddit/environment')
    .then(res => res.body.map(post => post.data))
}