import { GET_CATEGORIES, SET_CATEGORY } from '../actions/types';

export const intialCategory = {
  name: 'all',
  path: ''
};

export const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [intialCategory, ...action.payload];
    default:
      return state;
  }
};

export const category = (state = 'all', action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
