import { FETCH_POSTS, GET_CATEGORIES, SET_CATEGORY, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST, EDIT_POST, UPDATE_POST, CANCEL_EDIT, UDPATE_COMPLETED } from '../actions/types'
import { combineReducers } from 'redux'

const intialCategory = {
  name: 'all',
  path: '/'
}

const posts = (state = [] , action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action
        .payload
        .filter(post => !post.deleted)

    case UPVOTE_POST:
    case DOWNVOTE_POST:
    case EDIT_POST:
    case UPDATE_POST:
      return state.map(post => post.id === action.payload.id
        ? action.payload
        : post)

    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id)

    default:
      return state
  }
}

const categories = (state = [] , action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [
        intialCategory, ...action.payload
      ]
    default:
      return state
  }
}

const category = (state = 'all' , action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload
    default:
      return state
  }
}

const editPost = (state = {} , action) => {
  switch (action.type) {
    case EDIT_POST:
    case CANCEL_EDIT:
    case UDPATE_COMPLETED:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({posts, categories, category, editPost})
