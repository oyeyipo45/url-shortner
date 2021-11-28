import {
    URL_CREATE_FAIL,
	URL_CREATE_SUCCESS,
	URL_CREATE_REQUEST,
} from "./constants.js"


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
