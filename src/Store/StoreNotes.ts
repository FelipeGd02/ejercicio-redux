import { configureStore } from "@reduxjs/toolkit";
import NotasReducer from "./Slice/SliceNotes";

export const storeRedux = configureStore({
  reducer: {
    reducerNotas: NotasReducer,
  },
});
