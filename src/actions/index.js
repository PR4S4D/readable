import {
  FETCH_POSTS,
  GET_CATEGORIES,
  SET_CATEGORY,
  UPVOTE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
  CANCEL_EDIT,
  UDPATE_COMPLETED
} from './types'

const API_END_POINT = 'http://localhost:3004'

const REQUEST_HEADER = {
  'content-type': 'application/json',
  'Authorization': 'readable-lp'
}

const GET_REQUEST_HEADER = {
  method: 'GET',
  headers: REQUEST_HEADER
}

const POST_REQUEST_HEADER = {
  method: 'POST',
  headers: REQUEST_HEADER
}

const PUT_REQUEST_HEADER = {
  method: 'PUT',
  headers: REQUEST_HEADER
}

const DELETE_REQUEST_HEADER = {
  method: 'DELETE',
  headers: REQUEST_HEADER
}

const UPVOTE_OPTION = {
  'option': 'upVote'
}

const DOWNVOTE_OPTION = {
  'option': 'downVote'
}

export const fetchPosts = () => dispatch => {
  fetch(`${API_END_POINT}/posts/`, GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(posts => {
      dispatch({type: FETCH_POSTS, payload: posts})
    })
}

export const getCategories = () => (dispatch, props) => {
  fetch(`${API_END_POINT}/categories`, GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(json => dispatch({type: GET_CATEGORIES, payload: json.categories}))
}

export const setCategory = (category) => dispatch => {
  dispatch({type: SET_CATEGORY, payload: category})
}

export const upvotePost = (postId) => dispatch => {
  fetch(`${API_END_POINT}/posts/${postId}`, {
      ...POST_REQUEST_HEADER,
      body: JSON.stringify(UPVOTE_OPTION)
    })
    .then(res => res.json())
    .then(post => dispatch({type: UPVOTE_POST, payload: post}))
}

export const downvotePost = (postId) => dispatch => {
  fetch(`${API_END_POINT}/posts/${postId}`, {
      ...POST_REQUEST_HEADER,
      body: JSON.stringify(DOWNVOTE_OPTION)
    })
    .then(res => res.json())
    .then(post => dispatch({type: DOWNVOTE_POST, payload: post}))
}

export const updatePost = (post) => dispatch => {
  fetch(`${API_END_POINT}/posts/${post.id}`, {
      ...PUT_REQUEST_HEADER,
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({type: UPDATE_POST, payload: post}))
    .then(() => {
      dispatch({type: CANCEL_EDIT, payload: {}})
    })

}

export const deletePost = (postId) => dispatch => {
  fetch(`${API_END_POINT}/posts/${postId}`, {
      ...DELETE_REQUEST_HEADER
    })
    .then(res => res.json())
    .then(post => dispatch({type: DELETE_POST, payload: post}))
}

export const createPost = (post) => dispatch => {
  console.log('creating post')
  fetch(`${API_END_POINT}/posts`, {
      ...POST_REQUEST_HEADER,
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({type: CREATE_POST, payload: post}))
}

export const editPost = (post) => dispatch => {
  cancelEdit();
  dispatch({type: EDIT_POST, payload: post})
}

export const cancelEdit = () => dispatch => {
  dispatch({type: CANCEL_EDIT, payload: {}})
}