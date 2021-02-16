import fetch from '../../library/fetch';
import {
  addProducts, addProductsCount, addProduct, addProductReviews, addProductsPrice,
} from '../slices/products';
import type { Review } from '../../schemas/review';
import type { Product } from '../../schemas/product';
import type { AppThunk, AppDispatch } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ProductParams = { skip?: number, limit?: number, categoryId?: string[] };

// eslint-disable-next-line max-len
export const getProducts = (queryParams: { priceFrom: number; limit: number; skip: number; priceTo: number; categoryId: string[] }): AppThunk => async (dispatch: AppDispatch) => {
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

export const getProductsPrice = (
  priceFrom: number, priceTo: number,
): AppThunk => async (dispatch: AppDispatch) => {
  const result: Product[] = await fetch(`/products?priceFrom=${priceFrom}%priceTo=${priceTo}`);

  // @ts-ignore
  dispatch(addProductsPrice(result));
};
