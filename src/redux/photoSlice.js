import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./operations";
// import { changeContact, fetchContacts } from "./operations";
// import { addContact, deleteContact } from "./operations";

 export const INITIAL_STATE = {
  photos: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    loadButton: false,
    scrollButton: false,
  },
  filters: {
		name: ""
   },

   
}

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
}

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
}


const photoSlice = createSlice({
  name: 'photos',
  initialState: INITIAL_STATE.photos,
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
      if (action.payload > 1) {
        state.scrollButton = true;
      }
  },
  changeItems(state, action) {
           state.items = action.payload;
    },
  changeButton(state, action) {
           state.scrollButton = action.payload;
   },

  },
  

  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.pending, handlePending)
      .addCase(fetchPhotos.rejected, handleRejected)
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.items =[...state.items, ...action.payload.results]
        if (action.payload.total_pages>state.page) {
          state.loadButton = true;
        }
      })
  },
});

export const photosReducer = photoSlice.reducer;

export const { changePage,changeItems,changeButton } = photoSlice.actions;