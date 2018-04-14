import * as API from '../utils/api';
import { beginAjax, endAjax } from './ajax';
import { GET_CATEGORIES, SET_CATEGORY } from './types';

export const getCategories = () => (dispatch, props) => {
  dispatch(beginAjax());
  fetch(`${API.API_END_POINT}/categories`, API.GET_REQUEST_HEADER)
    .then(res => res.json())
    .then(json => dispatch({ type: GET_CATEGORIES, payload: json.categories }))
    .then(() => dispatch(endAjax()));
};

export const setCategory = category => dispatch => {
  dispatch({ type: SET_CATEGORY, payload: category });
};
