import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    cart: [],
    preview: {},
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart.splice(
        state.cart.findIndex((e) => e.id === action.payload.id),
        1
      );
    },
    addToPreview: (state, action) => {
      return { ...state, preview: action.payload };
    },
  },
});

export const { addToCart, removeFromCart, addToPreview } =
  shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;

export default configureStore({
  reducer: shoppingReducer,
  composeWithDevTools,
});
