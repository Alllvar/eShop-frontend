import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import categories from './categories';
import products from './products';

const createRootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  categories,
  products,
});

export default createRootReducer;
