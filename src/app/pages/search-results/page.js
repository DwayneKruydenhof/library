"use client";

import React from 'react'; // Import React for JSX syntax
import SearchResults from '../../components/SearchResults'; // Import SearchResults component
import SearchBar from '../../components/SearchBar'; // Import SearchBar component

// Functional component representing the Search Results page
const SearchResultsPage = () => {

  return (
    <div>
      <div className='searchBarResultPagePosition'>
        <SearchBar/>
      </div>
      <SearchResults />
    </div>
  );
};

export default SearchResultsPage;
