import { createBrowserHistory, History } from 'history';
import { Middleware } from 'redux';
import {
  configureStore as configureAppStore,
  getDefaultMiddleware as GetDefaultMiddleware,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './slices';

export const history: History<any> = createBrowserHistory();
// eslint-disable-next-line max-len
const middleware = (getDefaultMiddleware: typeof GetDefaultMiddleware): MiddlewareArray<Middleware> => getDefaultMiddleware()
  .concat(routerMiddleware(history));
export const rootReducer = createRootReducer(history);

function configureStore(preloadedState: any) {
  return configureAppStore(
    {
      reducer: rootReducer,
      preloadedState,
      middleware,
    },
  );
}

const store = configureStore({});

export default store;
