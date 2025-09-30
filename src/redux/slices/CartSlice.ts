import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const initialState: any = {
  isLoading: false,
  cart: [],
};

export const CartSlice = createSlice({
  name: 'CartSlice',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const isInTheCart = state.cart.find(
        (item: any) => item.id === action.payload.id,
      );
      if (isInTheCart) {
        const updateQnty = state.cart.filter((item: any) =>
          item.id === action.payload.id ? { ...item, qnty: item.qnty++ } : item,
        );
        state.cart = updateQnty;
      } else {
        state.cart = [...state.cart, { ...action.payload, qnty: 1 }];
      }
    },
    decreaseQnty: (state, action) => {
      const updatedCart = state.cart.filter((item: any) =>
        item.id === action.payload.id ? { ...item, qnty: item.qnty-- } : item,
      );
      state.cart = updatedCart;
    },
    removeFromCart: (state, action) => {
      const filterdCart = state.cart.filter((item: any) => item.id !== action.payload.id);
      state.cart = filterdCart;
    },
    clearCart : (state)=>{
        state.cart = []
    }
  },
});

export const { addToCart, decreaseQnty,removeFromCart,clearCart } = CartSlice.actions;

export default CartSlice.reducer;
