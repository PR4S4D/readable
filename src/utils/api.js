export const API_END_POINT = 'http://localhost:3004';

export const REQUEST_HEADER = {
  'Content-type': 'application/json',
  Authorization: 'readable-lp'
};

export const GET_REQUEST_HEADER = {
  method: 'GET',
  headers: REQUEST_HEADER
};

export const POST_REQUEST_HEADER = {
  method: 'POST',
  headers: REQUEST_HEADER
};

export const PUT_REQUEST_HEADER = {
  method: 'PUT',
  headers: REQUEST_HEADER
};

export const DELETE_REQUEST_HEADER = {
  method: 'DELETE',
  headers: REQUEST_HEADER
};

export const UPVOTE_OPTION = {
  option: 'upVote'
};

export const DOWNVOTE_OPTION = {
  option: 'downVote'
};
