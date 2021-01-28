import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../schemas/product';
import { Review } from '../../schemas/review';

const initialState : { data: Product[], count: number, reviews: Review[] } = {
  data: [], count: 0, reviews: [],
};

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
    addProductReviews(state, action: PayloadAction<Review[]>) {
      state.reviews.length = 0;
      state.reviews.push(...action.payload);
    },
  },
});

export const {
  addProducts, addProductsCount, addProduct, resetProducts, addProductReviews,
} = productsSlice.actions;

export default productsSlice.reducer;
