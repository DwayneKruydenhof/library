"use client"; // Ensure this is at the top

import React from 'react'; // Import React for JSX syntax
import axios from 'axios'; // Import axios for making HTTP requests
import SearchBar from '../../components/SearchBar'; // Import SearchBar component
import Image from 'next/image'; // Import Image component from Next.js
import logo from '../../../assets/Logo alt.svg'; // Import logo image asset

// Functional component representing a page with a centered logo and search bar
export default function Page() {
  return (
    <div className='pageContainer'>
      <Image
        src={logo}
        alt='Logo'
        className='centeredLogo'
        style={{ zIndex: '20', position: 'absolute' }} // Style for centered logo
      />
      <div className='searchBarHomePagePosition'>
        <SearchBar
          size="large" // Set size prop for SearchBar component
        />
      </div>
    </div>
  );
}
