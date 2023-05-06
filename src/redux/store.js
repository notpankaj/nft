import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cartSlice";
import logger from "redux-logger";
import authReducer from "./feature/authSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: [logger],
});
