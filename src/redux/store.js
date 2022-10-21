import { configureStore } from '@reduxjs/toolkit';
import clothesAPI from './slices/getDataClothesSlice';
import clothesStorage from './slices/dataStorageSlice';
import orderAPI from './slices/postDataOrderSlice';

export const store = configureStore({
  reducer: { clothesAPI, clothesStorage, orderAPI },
});
