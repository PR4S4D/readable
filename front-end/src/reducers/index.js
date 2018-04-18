import { END_AJAX, BEGIN_AJAX } from '../actions/types';
import { combineReducers } from 'redux';
import * as posts from './posts';
import * as categories from './categories';
import * as comments from './comments';

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
  ...categories,
  ...posts,
  ...comments,
  ajax
});
