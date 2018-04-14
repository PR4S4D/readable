import { END_AJAX, BEGIN_AJAX } from '../actions/types';
import { combineReducers } from 'redux';
import * as posts from './PostReducers';
import * as comments from './CommentReducers';

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
  ...posts,
  ...comments,
  ajax
});
