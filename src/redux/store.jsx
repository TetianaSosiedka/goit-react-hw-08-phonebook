import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contactsApi';
import contacts from './contacts';
import filter from './filterSlice';
import user from './user';
import { userApi } from './userApi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistUserConfig = {
  key: 'user',
  version: 1,
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, user);

export const store = configureStore({
  reducer: {
    contacts,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
    user: persistedUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, userApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
