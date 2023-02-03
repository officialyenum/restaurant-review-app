import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recordSlice from './slices/record.slice';
import authSlice from './slices/auth.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({ 
    record: recordSlice.reducer,
    auth: authSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
// Configure Store
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;