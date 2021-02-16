import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../schemas/product';
import { Review } from '../../schemas/review';

// eslint-disable-next-line max-len
const initialState : { data: Product[], count: number, reviews: Review[], priceFrom: number, priceTo: number } = {
  data: [], count: 0, reviews: [], priceFrom: 0, priceTo: 90,
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
    addProductsPrice(state) {
      state.priceFrom = 0;
      state.priceTo = 90;
    },
  },
});

export const {
  addProducts, addProductsCount, addProduct, addProductReviews, addProductsPrice,
} = productsSlice.actions;

export default productsSlice.reducer;
