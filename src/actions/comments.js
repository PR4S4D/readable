import * as API from '../utils/api';
import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPDATE_COMMENT,
  FINISH_EDIT,
  CLEAR_COMMENTS,
  CANCEL_EDIT
} from './types';

export const fetchComments = postId => dispatch => {
  fetch(`${API.API_END_POINT}/posts/${postId}/comments`, API.GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(comments => dispatch({ type: FETCH_COMMENTS, payload: comments }));
};

export const addComment = comment => dispatch => {
  fetch(`${API.API_END_POINT}/comments`, {
    ...API.POST_REQUEST_HEADER,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(comment => dispatch({ type: ADD_COMMENT, payload: comment }));
};

export const upvoteComment = commentId => dispatch => {
  fetch(`${API.API_END_POINT}/comments/${commentId}`, {
    ...API.POST_REQUEST_HEADER,
    body: JSON.stringify(API.UPVOTE_OPTION)
  })
    .then(res => res.json())
    .then(comment => dispatch({ type: UPVOTE_COMMENT, payload: comment }));
};

export const downvoteComment = commentId => dispatch => {
  fetch(`${API.API_END_POINT}/comments/${commentId}`, {
    ...API.POST_REQUEST_HEADER,
    body: JSON.stringify(API.DOWNVOTE_OPTION)
  })
    .then(res => res.json())
    .then(comment => dispatch({ type: DOWNVOTE_COMMENT, payload: comment }));
};

export const deleteComment = commentId => dispatch => {
  fetch(`${API.API_END_POINT}/comments/${commentId}`, {
    ...API.DELETE_REQUEST_HEADER
  })
    .then(res => res.json())
    .then(comment => dispatch({ type: DELETE_COMMENT, payload: comment }));
};

export const editComment = comment => dispatch => {
  dispatch(cancelEdit());
  dispatch({ type: EDIT_COMMENT, payload: comment });
};

export const updateComment = comment => dispatch => {
  fetch(`${API.API_END_POINT}/comments/${comment.id}`, {
    ...API.PUT_REQUEST_HEADER,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(comment => dispatch({ type: UPDATE_COMMENT, payload: comment }))
    .then(() => dispatch({ type: FINISH_EDIT, payload: {} }));
};

export const clearComments = () => dispatch => {
  dispatch({ type: CLEAR_COMMENTS, payload: null });
};

export const cancelEdit = () => dispatch => {
  dispatch({ type: CANCEL_EDIT, payload: {} });
};

export const finishEdit = () => dispatch => {
  dispatch({ type: FINISH_EDIT, payload: {} });
};
