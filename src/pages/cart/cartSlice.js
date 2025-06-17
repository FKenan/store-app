import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

const initialState = {
  // const {cart, a,b,vb} = useSelector(state=>state.cart) ile bu state e ulaşabiliriz
  cart: null,
  status: "idle",
};

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ productId, quantity = 1 }) => {
    try {
      return await requests.cart.addItem(productId, quantity);
    } catch (error) {
      console.log(error);
    }
  }
);

// const dispatch = useDispatch() ile burdaki reducers metodlarına erişebiliriz. dispatch(setCart(value)) gibi.
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    //pending => sorgu gönderiliyor.
    builder.addCase(addItemToCart.pending, (state, action) => {
      state.cart = action.payload;
      state.status = "pendingAddItem" + action.meta.arg.productId;
    });

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = "idle";
    });

    builder.addCase(addItemToCart.rejected, (state) => {
      state.status = "idle";
    });
  },
});

export const { setCart } = cartSlice.actions;
