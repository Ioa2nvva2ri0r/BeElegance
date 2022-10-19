/* eslint-disable no-undef */
import axios from 'axios';
import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const env = process.env;

export const clothesDataAPI = createAsyncThunk(
  'clothes/getDataAPI',
  async (id) => {
    const response = await axios({
      method: 'GET',
      url: `${env.REACT_APP__API_URL}/${
        env.REACT_APP__API_PATH_GET
      }/${`?category=${env.REACT_APP__API_PRODUCT}`}`,
    });

    const data = response.data[0].data;

    return id
      ? data
          .map((obj) => {
            if (obj.id === id)
              obj.products = data.filter(
                (elem) => elem.category === obj.category && elem.id !== id
              );

            return obj;
          })
          .filter((obj) => obj.id === id)[0]
      : { categories: [...new Set(data.map((obj) => obj.category))], data };
  }
);

const clothesAdapter = createEntityAdapter();

const clothesSlice = createSlice({
  name: 'clothes',
  initialState: clothesAdapter.getInitialState({
    loading: true,
    data: null,
    error: null,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(clothesDataAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clothesDataAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(clothesDataAPI.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error;
      });
  },
});

export default clothesSlice.reducer;
