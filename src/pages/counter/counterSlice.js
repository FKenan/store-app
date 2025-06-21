import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  //burada redux işlemlerini yapıyoruz. name ile isim, initalstate ile başlangıc stateti ve reducer larını tanımladık.counterSlice.actions ile reducer fonksiyonlarına erişiriz.
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      // gönderilen değer kadar arttırma
      // action.payload => gelen değer
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions; // reducers fonksiyonlarına erişme
