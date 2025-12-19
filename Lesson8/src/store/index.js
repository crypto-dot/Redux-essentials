import {configureStore} from "@reduxjs/toolkit";
import {taskSlice} from "./taskSlice.js";
import {humanSlice} from "./humanSlice.js";
export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humanSlice.reducer
  }
});