import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.token = action.payload;
      localStorage.setItem("AUTH", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.token = null;
      state.token = null;
      localStorage.setItem("AUTH", "");
    },
  },
});

export const { loginAction, logout } = authSlice.actions;

// Selector
export const tokenSelector = (state) => state.auth.token;

export default authSlice.reducer;
