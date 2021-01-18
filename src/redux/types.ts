import store, { rootReducer } from './store';
import type { ThunkAction } from 'redux-thunk';
import type { Action } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;