import { URL_CREATE_FAIL, URL_CREATE_SUCCESS, URL_CREATE_REQUEST, URL_REDIRECT_FAIL, URL_REDIRECT_SUCCESS, URL_REDIRECT_REQUEST } from './constants.js';


export const urlReducer = (state = {}, action) => {
  switch (action.type) {
    case URL_CREATE_REQUEST:
      return { loading: true };
    case URL_CREATE_SUCCESS:
      return { loading: false, shortenedUrl: action.payload };
    case URL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const redirectReducer = (state = {}, action) => {
  switch (action.type) {
    case URL_REDIRECT_REQUEST:
      return { loading: true };
    case URL_REDIRECT_SUCCESS:
      return { loading: false, redirectUrl: action.payload };
    case URL_REDIRECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};