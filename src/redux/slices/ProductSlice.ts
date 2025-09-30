import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const initialState = {
  isLoading: false,
  products: [],
};

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);
  return products;
});

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(getAllProducts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.products = actions.payload
        console.log('actions-----', actions);
      }),
      builder.addCase(getAllProducts.rejected, state => {
        state.isLoading = false;
        Alert.alert('Something went wrong!');
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
