import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { fetchPhotos } from "./operations";
import {PhotoData} from "./operations"

 export interface Photo {
   id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface PhotosState {
  items: Photo[];
  loading: boolean;
  error: string | boolean;
  page: number;
  loadButton: boolean;
  scrollButton: boolean;
}

interface FiltersState {
  name: string;
}

export interface State {
  photos: PhotosState;
  filters: FiltersState;
}

 export const INITIAL_STATE:State = {
  photos: {
    items: [],
    loading: false,
    error: false,
    page: 1,
    loadButton: false,
    scrollButton: false,
  },
  filters: {
		name: ""
   },

   
}



const photoSlice = createSlice({
  name: 'photos',
  initialState: INITIAL_STATE.photos,
  reducers: {
    changePage(state, action:PayloadAction<number>) {
      state.page = action.payload;
      if (action.payload > 1) {
        state.scrollButton = true;
      }
  },
  changeItems(state, action:PayloadAction<Photo[]>) {
           state.items = action.payload;
    },
  changeButton(state, action:PayloadAction<boolean>) {
           state.scrollButton = action.payload;
   },

  },
  

  extraReducers: builder => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
  state.loading = true;
  state.error = false;
} )
      .addCase(fetchPhotos.rejected, (state) => {
        state.loading = false;
        state.error = true;
})
      .addCase(fetchPhotos.fulfilled, (state, action:PayloadAction<PhotoData>) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.results];
        state.loadButton = true;
         if (action.payload.total_pages>state.page) {
          state.loadButton = true;
        }
      })
  },
});

export const photosReducer = photoSlice.reducer;

export const { changePage,changeItems,changeButton } = photoSlice.actions;