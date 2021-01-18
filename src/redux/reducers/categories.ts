import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../schemas/category';


const initialState : { data: Category[], count: number } = { data: [], count: 0 };

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategories(state, action: PayloadAction<Category[]>) {
            state.data.push(...action.payload);
        },
    }
});

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;