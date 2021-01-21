import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../schemas/product';

const initialState : { data: Product[], count: number } = { data: [], count: 0 };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<Product[]>) {
      state.data.length = 0;
      state.data.push(...action.payload);
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.data.push(...Array.from(new Set([...state.data, action.payload])));
    },
    addProductsCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    resetProducts(state) {
      state.data = [];
    },
  },
});

export const {
  addProducts, addProductsCount, addProduct, resetProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
