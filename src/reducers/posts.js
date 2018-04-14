import {
  FETCH_POSTS,
  FETCH_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  DELETE_POST,
  EDIT_POST,
  CLEAR_POST,
  UPDATE_POST,
  CANCEL_EDIT,
  SORT,
  FINISH_EDIT,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/types';
import { combineReducers } from 'redux';

export const sort = (state = 0, action) => {
  if (action.type === SORT) {
    return action.payload;
  }
  return state;
};

export const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.filter(post => !post.deleted);

    case UPVOTE_POST:
    case DOWNVOTE_POST:
    case EDIT_POST:
    case UPDATE_POST:
      return state.map(
        post => (post.id === action.payload.id ? action.payload : post)
      );

    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);

    default:
      return state;
  }
};

export const editPost = (state = {}, action) => {
  switch (action.type) {
    case EDIT_POST:
    case CANCEL_EDIT:
    case FINISH_EDIT:
      return action.payload;
    default:
      return state;
  }
};

export const post = (state = null, action) => {
  switch (action.type) {
    case UPVOTE_POST:
    case DOWNVOTE_POST:
    case EDIT_POST:
    case UPDATE_POST:
    case FETCH_POST:
    case CLEAR_POST:
      return action.payload;
    case ADD_COMMENT:
      return { ...state, commentCount: ++state.commentCount };
    case DELETE_COMMENT:
      return { ...state, commentCount: --state.commentCount };
    default:
      return state;
  }
};
