import { combineReducers } from '@reduxjs/toolkit'
import categories from './categories';
import products from './products';
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

const createRootReducer = (history: History<any>) => combineReducers({
    router: connectRouter(history),
    categories,
    products,
});

export default createRootReducer;