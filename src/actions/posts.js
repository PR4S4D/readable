import * as API from '../utils/api';
import { beginAjax, endAjax } from './ajax';
import {
  SORT,
  FETCH_POSTS,
  FETCH_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  UPDATE_POST,
  FINISH_EDIT,
  DELETE_POST,
  CREATE_POST,
  CLEAR_POST,
  EDIT_POST,
  CANCEL_EDIT
} from './types';

export const sort = sortOption => dispatch => {
  dispatch({ type: SORT, payload: sortOption });
};

export const fetchPosts = () => dispatch => {
  fetch(`${API.API_END_POINT}/posts/`, API.GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(posts => {
      dispatch({ type: FETCH_POSTS, payload: posts });
    });
};

export const fetchPost = postId => dispatch => {
  dispatch(beginAjax());
  fetch(`${API.API_END_POINT}/posts/${postId}`, API.GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(post => {
      dispatch({ type: FETCH_POST, payload: post });
    })
    .then(() => dispatch(endAjax));
};

export const upvotePost = postId => dispatch => {
  fetch(`${API.API_END_POINT}/posts/${postId}`, {
    ...API.POST_REQUEST_HEADER,
    body: JSON.stringify(API.UPVOTE_OPTION)
  })
    .then(res => res.json())
    .then(post => dispatch({ type: UPVOTE_POST, payload: post }));
};

export const downvotePost = postId => dispatch => {
  fetch(`${API.API_END_POINT}/posts/${postId}`, {
    ...API.POST_REQUEST_HEADER,
    body: JSON.stringify(API.DOWNVOTE_OPTION)
  })
    .then(res => res.json())
    .then(post => dispatch({ type: DOWNVOTE_POST, payload: post }));
};

export const updatePost = post => dispatch => {
  fetch(`${API.API_END_POINT}/posts/${post.id}`, {
    ...API.PUT_REQUEST_HEADER,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => dispatch({ type: UPDATE_POST, payload: post }))
    .then(() => dispatch({ type: FINISH_EDIT, payload: {} }));
};

export const deletePost = postId => dispatch => {
  fetch(`${API.API_END_POINT}/posts/${postId}`, {
    ...API.DELETE_REQUEST_HEADER
  })
    .then(res => res.json())
    .then(post => dispatch({ type: DELETE_POST, payload: post }));
};

export const createPost = post => dispatch => {
  dispatch(beginAjax());
  fetch(`${API.API_END_POINT}/posts`, {
    ...API.POST_REQUEST_HEADER,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => dispatch({ type: CREATE_POST, payload: post }))
    .then(() => dispatch(endAjax()));
};

export const clearPost = post => dispatch =>
  dispatch({ type: CLEAR_POST, payload: null });

export const editPost = post => dispatch => {
  dispatch(cancelEdit());
  dispatch({ type: EDIT_POST, payload: post });
};

export const cancelEdit = () => dispatch => {
  dispatch({ type: CANCEL_EDIT, payload: {} });
};

export const finishEdit = () => dispatch => {
  dispatch({ type: FINISH_EDIT, payload: {} });
};
