import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import { localStorageMiddleware } from "../middleware/localStorageMiddleware.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
