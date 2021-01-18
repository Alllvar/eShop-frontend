import fetch from '../../library/fetch'
import { Category } from '../../schemas/category';
import { AppThunk, AppDispatch } from '../types';
import { addCategories } from '../reducers/categories';

export const getCategories = (): AppThunk => async (dispatch: AppDispatch) => {
    const result: Category[] = await fetch('/categories');

    dispatch(addCategories(result))
};