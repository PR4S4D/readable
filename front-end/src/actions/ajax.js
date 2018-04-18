import { BEGIN_AJAX, END_AJAX } from './types';

export const beginAjax = () => dispatch => {
  dispatch({ type: BEGIN_AJAX, payload: true });
};

export const endAjax = () => dispatch => {
  dispatch({ type: END_AJAX, payload: false });
};
