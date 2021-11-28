import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




export const shortenLongUrl = createAsyncThunk('shortenUrl', async (url) => {
  const response = await  axios.post('http://localhost:10000/api/v1/shortenUrl', url);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});


export const getUrls = createAsyncThunk('shortenUrl/find', async (url) => {
  const response = await axios.get('http://localhost:10000/api/v1/shortenUrl/find');
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

const initialState = {
    list: [],
};


export const urlSlice = createSlice({
  name: 'url',
    initialState,
    status : null,
  
  reducers: {
      shortenUrl: async (state, action) => {
         
    },
  }
});

export const { shortenUrl } = urlSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUrl = (state) => state.url.value;



export default urlSlice.reducer;
