import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';

import authReducer from './auth';

import { Store } from '../types/store.ts';

const authPersistedReducer = persistReducer(
  {
    key: Store.AUTH,
    version: 1,
    storage,
    blacklist: [],
  },
  authReducer
);

export const index = configureStore({
  reducer: {
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(index);

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
