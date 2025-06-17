import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counters/counterSlice";

// chrome eklediğimiz redux devtools ile burdaki yapıyı chromdan takip edebiliriz.
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
