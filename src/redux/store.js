import { configureStore } from '@reduxjs/toolkit';
import cardLimit from './slices/cardLimitSlice';
import clothesAPI from './slices/getDataClothesSlice';
import clothesStorage from './slices/dataStorageSlice';
import orderAPI from './slices/postDataOrderSlice';

export const store = configureStore({
  reducer: { cardLimit, clothesAPI, clothesStorage, orderAPI },
});
