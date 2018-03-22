import { FETCH_POSTS, GET_CATEGORIES, SET_CATEGORY } from '../actions/types'
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
