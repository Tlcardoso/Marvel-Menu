import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'marvel-heroes',
  storage,
  whitelist: [],
};

export { persistConfig, persistReducer, storage };
