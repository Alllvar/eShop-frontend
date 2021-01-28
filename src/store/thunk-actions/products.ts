import fetch from '../../library/fetch';
import {
  addProducts, addProductsCount, addProduct, addProductReviews,
} from '../slices/products';
import type { Review } from '../../schemas/review';
import type { Product } from '../../schemas/product';
import type { AppThunk, AppDispatch } from '../types';

type ProductParams = { skip?: number, limit?: number, categoryId?: string[] };

// eslint-disable-next-line max-len
export const getProducts = (queryParams: ProductParams): AppThunk => async (dispatch: AppDispatch) => {
  const result: Product[] = await fetch('/products', { queryParams });

  dispatch(addProducts(result));
};

// eslint-disable-next-line max-len
export const getProductsCount = (categoryId?: string[]): AppThunk => async (dispatch: AppDispatch) => {
  const result: number = await fetch('/products/count', { queryParams: { categoryId } });

  dispatch(addProductsCount(result));
};

export const getProductById = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  const result: Product = await fetch(`/products/${id}`);

  dispatch(addProduct(result));
};

export const getProductreviews = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  const result: Review[] = await fetch(`/products/${id}/reviews`);

  dispatch(addProductReviews(result));
};
