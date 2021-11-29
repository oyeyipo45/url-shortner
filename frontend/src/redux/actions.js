import { URL_CREATE_FAIL, URL_CREATE_SUCCESS, URL_CREATE_REQUEST, URL_REDIRECT_FAIL, URL_REDIRECT_SUCCESS, URL_REDIRECT_REQUEST } from './constants.js';
import axios from 'axios';


export const shortenUrl = (longUrl) => async (dispatch) => {
  try {
    dispatch({
      type: URL_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

      console.log(longUrl, 'longUrl');
      
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/shortenUrl`, { longUrl }, config);

      console.log(data, "data")

    dispatch({
      type: URL_CREATE_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: URL_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export const redirectUrl = (shortUrl) => async (dispatch) => {
  try {
    dispatch({
      type: URL_REDIRECT_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    console.log(shortUrl, 'shortUrl');

    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/redirectUrl`, {shortUrl}, config);

    console.log(data, 'data');

    dispatch({
      type: URL_REDIRECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: URL_REDIRECT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};