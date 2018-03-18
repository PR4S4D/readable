import { FETCH_POSTS } from './types'

export const fetchPosts = () => dispatch => {
  console.log('Inside fetch posts')
  fetch('http://localhost:3004/posts/', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': 'readable-lp'
    }
  })
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    })
}
