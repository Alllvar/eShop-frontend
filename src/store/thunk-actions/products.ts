import fetch from '../../library/fetch'
import { addProducts, addProductsCount, addProduct } from '../slices/products';
import type { Product } from '../../schemas/product';
import type { AppThunk, AppDispatch } from '../types';

export const getProducts = (queryParams: { skip?: number, limit?: number, categoryId?: string[] }): AppThunk => async (dispatch: AppDispatch) => {
    const result: Product[] = await fetch('/products', { queryParams });

    dispatch(addProducts(result))
};

export const getProductsCount = (categoryId?: string[]): AppThunk => async (dispatch: AppDispatch) => {
    const result: number = await fetch('/products/count', { queryParams: { categoryId } });

    dispatch(addProductsCount(result))
};

export const getProductById = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    const result: Product = await fetch(`/products/${id}`);

    dispatch(addProduct(result))
};