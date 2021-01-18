import { createBrowserHistory, History } from 'history';
import { configureStore as configureAppStore, getDefaultMiddleware as GetDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

const middleware = (getDefaultMiddleware: typeof GetDefaultMiddleware) => getDefaultMiddleware()
    .concat(routerMiddleware(history));

export const history: History<any> = createBrowserHistory();
export const rootReducer = createRootReducer(history);

function configureStore(preloadedState: any) {
    return configureAppStore(
        {
            reducer: rootReducer,
            preloadedState,
            middleware
        }
    );
}

const store = configureStore({});

export default store;