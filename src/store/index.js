import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import shopReducer from "./slices/shopSlice";
import cartReducer from "./slices/cartSlice"
import { shopApi } from '../services/shopApi';
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    userReducer,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})
setupListeners(store.dispatch)