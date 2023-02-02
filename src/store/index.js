import { configureStore } from '@reduxjs/toolkit';
import recordSlice from './slices/record.slice';
import authSlice from './slices/auth.slice';

// Configure Store
const store = configureStore({
    reducer: { 
        record: recordSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;