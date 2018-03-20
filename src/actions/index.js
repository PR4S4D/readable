import { FETCH_POSTS, GET_CATEGORIES } from './types'

const API_END_POINT = 'http://localhost:3004'
const GET_REQUEST_HEADER = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'readable-lp'
  }
}

export const fetchPosts = () => dispatch => {
  fetch(`${API_END_POINT}/posts/`, GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(posts => {
      dispatch({type: FETCH_POSTS, payload: posts})
    })
}

export const getCategories = () => dispatch => {
  fetch(`${API_END_POINT}/categories`, GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(json => dispatch({
      type: GET_CATEGORIES,
      payload: json.categories
    }))
}
