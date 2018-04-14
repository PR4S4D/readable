import {
  FETCH_POSTS,
  FETCH_POST,
  GET_CATEGORIES,
  SET_CATEGORY,
  UPVOTE_POST,
  DOWNVOTE_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST,
  CANCEL_EDIT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
  UPVOTE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DOWNVOTE_COMMENT,
  CLEAR_COMMENTS,
  FINISH_EDIT,
  END_AJAX,
  BEGIN_AJAX,
  SORT
} from '../actions/types';
import { combineReducers } from 'redux';

const intialCategory = {
  name: 'all',
  path: ''
};

const sort = (state = 0, action) => {
  if (action.type === SORT) {
    return action.payload;
  }
  return state;
};

const posts = (state = [], action) => {
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

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [intialCategory, ...action.payload];
    default:
      return state;
  }
};

const category = (state = 'all', action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

const editPost = (state = {}, action) => {
  switch (action.type) {
    case EDIT_POST:
    case CANCEL_EDIT:
    case FINISH_EDIT:
      return action.payload;
    default:
      return state;
  }
};

const post = (state = null, action) => {
  switch (action.type) {
    case UPVOTE_POST:
    case DOWNVOTE_POST:
    case EDIT_POST:
    case UPDATE_POST:
    case FETCH_POST:
      return action.payload;
    case ADD_COMMENT:
      return { ...state, commentCount: ++state.commentCount };
    case DELETE_COMMENT:
      return { ...state, commentCount: --state.commentCount };
    default:
      return state;
  }
};

const comments = (state = null, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload.filter(comment => !comment.deleted);

    case UPVOTE_COMMENT:
    case DOWNVOTE_COMMENT:
    case EDIT_COMMENT:
    case UPDATE_COMMENT:
      return state.map(
        comment => (comment.id === action.payload.id ? action.payload : comment)
      );
    case CLEAR_COMMENTS:
      return action.payload;

    case ADD_COMMENT:
      return state ? [...state, action.payload] : [action.payload];
    case DELETE_COMMENT:
      return state.filter(post => post.id !== action.payload.id);

    default:
      return state;
  }
};

const editComment = (state = null, action) => {
  switch (action.type) {
    case EDIT_COMMENT:
    case CANCEL_EDIT:
    case FINISH_EDIT:
      return action.payload;
    default:
      return state;
  }
};

const ajax = (state = false, action) => {
  switch (action.type) {
    case BEGIN_AJAX:
    case END_AJAX:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  categories,
  category,
  editPost,
  post,
  comments,
  editComment,
  ajax,
  sort
});
