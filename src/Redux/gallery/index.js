import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllGalleries: []
};

export const galleryReducer = createSlice({
  name: 'galleryReducer',
  initialState,
  reducers: {
    setGalleries: (state, action) => {
      state.AllGalleries = action.payload;
    }
  },
});

// Actions
export const {  setGalleries } = galleryReducer.actions;

export default galleryReducer.reducer;
