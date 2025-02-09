import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feauters/users/userSlice";
import cartReducer from "./feauters/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
