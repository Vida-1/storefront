import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import cartInventorySlice from "./cartInventory";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cartInventory: cartInventorySlice.reducer,
  },
});
