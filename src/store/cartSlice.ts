import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    removeFromCart: (state, action: PayloadAction<number>) => {
  const index = state.items.findIndex(item => item.id === action.payload);
  if (index !== -1) {
    state.items.splice(index, 1); // Remove only the first occurrence
  }
}

  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
