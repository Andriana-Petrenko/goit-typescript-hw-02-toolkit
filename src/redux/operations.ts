import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Photo } from "./photoSlice";
import { AxiosError } from 'axios';

interface FetchPhotosPayload {
  inputSearch: string;
  page: number;
}

 export interface PhotoData {
  total: number;
  total_pages: number;
  results: Photo[];
}

export const fetchPhotos = createAsyncThunk< PhotoData, FetchPhotosPayload>("photos/fetchAll",
    async ({ inputSearch, page}: FetchPhotosPayload, thunkAPI) => {
        const ACCESS_KEY = 'Lo9uorFXpgT_Y7XkOmyvCmdEbDFs7mI4M-i24Hz4fks';
  const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS_KEY}&page=${page}`;
        try {
             const response = await axios.get<PhotoData>(url);
            const photos:PhotoData= response.data;  
            return photos;
    }
    catch (error) {
        const axiosError = error as AxiosError; 
            return thunkAPI.rejectWithValue(axiosError.message);

    }
});




