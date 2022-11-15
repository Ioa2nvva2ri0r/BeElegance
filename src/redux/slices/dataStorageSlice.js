import { createSlice } from '@reduxjs/toolkit';
import dataStorage from '../../auxiliary-functions/dataStorage';

const dataBasket = dataStorage({ key: 'basket-elegance', section: 'Корзина' });

const initialState = {
  data: dataBasket,
};

export const clothesDataStorage = createSlice({
  name: 'getDataStorage',
  initialState,
  reducers: {
    setDataBasket: (state, action) => {
      state.data = dataStorage(action.payload.option);
    },
  },
});

export const { setDataBasket } = clothesDataStorage.actions;

export default clothesDataStorage.reducer;
