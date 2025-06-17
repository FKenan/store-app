import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counters/counterSlice";
import { cartSlice } from "../pages/cart/cartSlice";

// chrome eklediğimiz redux devtools ile burdaki yapıyı chromdan takip edebiliriz.
// oluşturduğumuz sliceları buraya ekleriz.
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  },
});
