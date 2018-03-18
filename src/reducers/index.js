import { FETCH_POSTS } from '../actions/types'
import { combineReducers } from 'redux'

const initialState = {
  posts: []
}

const posts = (state = [] , action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload

    default:
      return state
  }
}

export default combineReducers({posts})
