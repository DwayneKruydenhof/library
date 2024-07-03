// src/features/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: [], // Add results to the initial state
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => { // Add a new action to set results
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = searchSlice.actions;
export default searchSlice.reducer;
