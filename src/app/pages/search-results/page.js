// src/pages/search-results.js
"use client";

import React from 'react';
import SearchResults from '../../components/SearchResults';
import { useRouter } from 'next/navigation';
import SearchBar from '../../components/SearchBar';


const SearchResultsPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className='searchBarResultPagePosition'>
        <SearchBar/>
        </div>
      
      <h1>  Search Results </h1>
      <SearchResults />
    </div>
  );
};

export default SearchResultsPage;
