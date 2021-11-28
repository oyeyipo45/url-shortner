import { URL_CREATE_FAIL, URL_CREATE_SUCCESS, URL_CREATE_REQUEST } from './constants.js';
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

    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // });

    //localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: URL_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
