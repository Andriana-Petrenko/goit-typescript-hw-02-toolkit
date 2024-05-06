import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchPhotos = createAsyncThunk("photos/fetchAll",
    async ({ inputSearch, page }, thunkAPI) => {
        const ACCESS_KEY = 'Lo9uorFXpgT_Y7XkOmyvCmdEbDFs7mI4M-i24Hz4fks';
  const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS_KEY}&page=${page}`;
        try {
             const response = await axios.get(url);
            const photos = response.data;  
  return photos;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
