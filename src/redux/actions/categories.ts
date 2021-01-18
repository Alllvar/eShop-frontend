import fetch from '../../library/fetch'
import { addCategories } from '../reducers/categories';
import type { AppThunk, AppDispatch } from '../types';
import type { Category } from '../../schemas/category';

export const getCategories = (): AppThunk => async (dispatch: AppDispatch) => {
    const result: Category[] = await fetch('/categories');

    dispatch(addCategories(result))
};