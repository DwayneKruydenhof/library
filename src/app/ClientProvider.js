"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '/src/store';
import NavBar from "./components/NavBar";

export default function ClientProvider({ children }) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Provider store={store}>
          {children}
        </Provider>
      </main>
    </div>
  );
}
