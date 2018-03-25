import { FETCH_POSTS, GET_CATEGORIES, SET_CATEGORY, UPVOTE_POST, DOWNVOTE_POST, DELETE_POST, EDIT_POST } from '../actions/types'
import { combineReducers } from 'redux'

const initialState = {
  posts: []
}

const posts = (state = [] , action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload

    case UPVOTE_POST:
    case DOWNVOTE_POST:
    case EDIT_POST:
      return state.map(post => post.id === action.payload.id
        ? action.payload
        : post)


    case DELETE_POST:
      return state.filter(post => post.id !== action.payload)

    default:
      return state
  }
}

const categories = (state = [
    {
      name: 'all',
      path: '/'
    }
  ] , action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [
        ...state,
        ...action.payload
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
export default combineReducers({posts, categories, category})
