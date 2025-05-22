import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contenSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
