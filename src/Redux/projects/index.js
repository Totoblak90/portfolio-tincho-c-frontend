import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllProjects: [],
  OneProyect: {},
};

export const projectReducer = createSlice({
  name: "projectReducer",
  initialState,
  reducers: {
    getAllProjects: (state, action) => {
      state.AllProjects = action.payload;
    },
    getOneProyect: (state, action) => {
      state.OneProyect = action.payload;
    },
  },
});

// Actions
export const { getAllProjects, getOneProyect } = projectReducer.actions;

export default projectReducer.reducer;
