import { createSlice } from '@reduxjs/toolkit';

const hash = document.location.hash;
const limit = window.innerWidth >= 1009 ? 6 : window.innerWidth >= 679 ? 4 : 2;

const initialState = {
  activePage: Number(hash !== null && hash !== '' ? hash.slice(1) : 1),
  pages: [],
  limit: {
    card: limit,
    array: [...new Array(limit)],
  },
};

export const cardLimitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.activePage = action.payload;
    },
    setPages: (state, action) => {
      state.pages = Array.from(
        { length: Math.ceil(action.payload / limit) },
        (v, i) => i + 1
      );
    },
  },
});

export const { setPages, setPage } = cardLimitSlice.actions;

export default cardLimitSlice.reducer;
