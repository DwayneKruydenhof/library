// src/pages/search-results.js
"use client";

import React from 'react';
import SearchResults from '../../components/SearchResults';
import { useRouter } from 'next/navigation';


const SearchResultsPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>  Search Results </h1>
      <SearchResults />
    </div>
  );
};

export default SearchResultsPage;
