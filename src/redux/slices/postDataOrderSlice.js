/* eslint-disable no-undef */
import axios from 'axios';
import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const env = process.env;

export const orderDataAPI = createAsyncThunk(
  'order/postDataAPI',
  async (data) => {
    if (data && data !== null) {
      const response = await axios({
        method: 'POST',
        url: `${env.REACT_APP__API_URL}/${env.REACT_APP__API_PATH_POST}`,
        data: {
          path: env.PUBLIC_URL,
          ...data,
        },
      });

      return {
        status: response.status,
        message:
          response.status >= 200 || response.status <= 299 ? 'OK' : 'ERROR',
      };
    } else return null;
  }
);

const orderAdapter = createEntityAdapter();

const orderSlice = createSlice({
  name: 'order',
  initialState: orderAdapter.getInitialState({
    loading: false,
    response: null,
    error: null,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(orderDataAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(orderDataAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
      })
      .addCase(orderDataAPI.rejected, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = action.error;
      });
  },
});

export default orderSlice.reducer;
