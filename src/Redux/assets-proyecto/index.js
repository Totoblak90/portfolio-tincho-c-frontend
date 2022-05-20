import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllAssets: []
};

export const assetsProyectoReducer = createSlice({
  name: 'assetsProyectoReducer',
  initialState,
  reducers: {
    getAllAssets: (state, action) => {
      state.AllAssets = action.payload;
    },
  },
});

// Actions
export const {  getAllAssets } = assetsProyectoReducer.actions;

export default assetsProyectoReducer.reducer;
