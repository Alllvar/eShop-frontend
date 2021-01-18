import fetch from '../../library/fetch'
import { addCategories } from '../slices/categories';
import type { AppThunk, AppDispatch } from '../types';
import type { Category } from '../../schemas/category';

export const getCategories = (): AppThunk => async (dispatch: AppDispatch) => {
    const result: Category[] = await fetch('/categories');

    dispatch(addCategories(result))
};