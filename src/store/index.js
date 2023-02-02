import { configureStore } from '@reduxjs/toolkit';
import recordSlice from './slices/record.slice';

// Configure Store
const store = configureStore({
    reducer: { 
        record: recordSlice.reducer
    }
});

export default store;