// src/components/NavBar.js
"use client";

import React, { useState, useEffect } from 'react';
import NavBarFull from './NavBarFull';
import DropdownNavBar from './DropdownNavBar';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isMobile ? <DropdownNavBar /> : <NavBarFull />;
};

export default NavBar;
