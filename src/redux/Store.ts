import { configureStore } from '@reduxjs/toolkit'
import  productReducer from './slices/ProductSlice'
import  cartReducer from './slices/CartSlice'
import  auth from './slices/AuthSlice'
export const store = configureStore({
  reducer: {
    auth,
    product: productReducer,
    cart: cartReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store