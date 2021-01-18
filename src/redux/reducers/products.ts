import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../schemas/product';

const initialState : { data: Product[], count: number } = { data: [], count: 0 };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts(state, action: PayloadAction<Product[]>) {
            state.data.length = 0;
            state.data.push(...action.payload);
        },
        addProductsCount(state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
    }
});

export const { addProducts, addProductsCount } = productsSlice.actions;

export default productsSlice.reducer;