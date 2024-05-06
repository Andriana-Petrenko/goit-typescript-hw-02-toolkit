
import { photosReducer } from './photoSlice';
import { filterReducer } from './filterSlice';
import { configureStore} from '@reduxjs/toolkit';



const store = configureStore({
  reducer: {
    photos: photosReducer,
    filters:filterReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store