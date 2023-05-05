import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cartSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [logger],
});
