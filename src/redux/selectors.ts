
import { RootState } from "./store";

export const selectPhotos = (state:RootState) => state.photos.items;
export const selectLoading = (state:RootState)  => state.photos.loading;
export const selectError = (state:RootState)  => state.photos.error;
export const selectPage = (state:RootState)  => state.photos.page;
export const selectLoadButton = (state:RootState) => state.photos.loadButton;
export const selectNameFilter = (state:RootState)  => state.filters.name;
export const selectScrollButton = (state:RootState)  => state.photos.scrollButton;
