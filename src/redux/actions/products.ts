import fetch from '../../library/fetch'
import { Product } from '../../schemas/product';
import { AppThunk, AppDispatch } from '../types';
import { addProducts, addProductsCount } from '../reducers/products';

export const getProducts = (queryParams: { skip?: number, limit?: number, categoryId?: string[] }): AppThunk => async (dispatch: AppDispatch) => {
    const result: Product[] = await fetch('/products', { queryParams });

    dispatch(addProducts(result))
};

export const getProductsCount = (categoryId?: string[]): AppThunk => async (dispatch: AppDispatch) => {
    const result: number = await fetch('/products/count', { queryParams: { categoryId } });

    dispatch(addProductsCount(result))
};