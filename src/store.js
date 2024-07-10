// src/store.js

import { configureStore } from '@reduxjs/toolkit'; // Import configureStore function from Redux Toolkit
import searchReducer from './features/searchSlice'; // Import searchReducer from searchSlice module

// Configure Redux store using configureStore
export const store = configureStore({
  reducer: {
    search: searchReducer, // Add searchReducer to the store's reducers
  },
});
