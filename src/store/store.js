import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counter/counterSlice";
import { cartSlice } from "../pages/cart/cartSlice";
import { catalogSlice } from "../pages/catalog/catalogSlice";
import { accountSlice } from "../pages/account/accountSlice";

// chrome eklediğimiz redux devtools ile burdaki yapıyı chromdan takip edebiliriz.
// oluşturduğumuz sliceları buraya ekleriz.
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    catalog: catalogSlice.reducer,
    account: accountSlice.reducer,
  },
});
