import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services';
import { persistConfig, persistReducer } from './persist';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
