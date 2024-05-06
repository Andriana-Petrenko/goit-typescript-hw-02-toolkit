import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./photoSlice";

const filterSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE.filters,
reducers: {
      changeFilter(state, action:PayloadAction<string>) {
           state.name = action.payload;
   }

  },
  
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter} = filterSlice.actions;