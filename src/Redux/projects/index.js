import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AllProjects: []
};

export const projectReducer = createSlice({
  name: 'projectReducer',
  initialState,
  reducers: {
    getAllProjects: (state, action) => {
      state.AllProjects = action.payload;
    },
  },
});

// Actions
export const {  getAllProjects } = projectReducer.actions;

export default projectReducer.reducer;
