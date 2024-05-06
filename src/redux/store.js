import { configureStore } from '@reduxjs/toolkit';
import { photosReducer } from './photoSlice';
import { filterReducer } from './filterSlice';


const store = configureStore({
  reducer: {
    photos: photosReducer,
    filters:filterReducer
  },
})
// export type RootState = ReturnType<typeof store.getState>

export default store