import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Verify: false,
};

export const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    verifyUser: (state, action) => {
      state.Verify = action.payload;
    }
  },
});

// Actions
export const { verifyUser } = loginReducer.actions;

export default loginReducer.reducer;