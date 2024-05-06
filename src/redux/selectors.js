// import { createSelector } from "@reduxjs/toolkit";

export const selectPhotos = state => state.photos.items;
export const selectLoading = state => state.photos.loading;
export const selectError = state => state.photos.error;
export const selectPage = state => state.photos.page;
export const selectLoadButton = state => state.photos.loadButton;
export const selectNameFilter = state => state.filters.name;
export const selectScrollButton = state => state.photos.scrollButton;
