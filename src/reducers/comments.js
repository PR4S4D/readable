import {
  FETCH_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  UPDATE_COMMENT,
  CLEAR_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  CANCEL_EDIT,
  FINISH_EDIT
} from '../actions/types';

export const comments = (state = null, action) => {
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

export const editComment = (state = null, action) => {
  switch (action.type) {
    case EDIT_COMMENT:
    case CANCEL_EDIT:
    case FINISH_EDIT:
      return action.payload;
    default:
      return state;
  }
};
