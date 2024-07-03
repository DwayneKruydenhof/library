// src/app/ClientProvider.js
"use client"; // Mark this component as a client component

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '/src/store';
import NavBar from "./components/navbar";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <NavBar />
      {children}
    </Provider>
  );
}
