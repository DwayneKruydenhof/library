"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'; // Import store correctly
import NavBar from "./components/NavBar";
import Footer from './components/Footer'; // Import Footer correctly

// ClientProvider component wraps the application with Redux Provider and includes NavBar and Footer
export default function ClientProvider({ children }) {
  return (
    <div>
      <header>
        <NavBar /> {/* Render the NavBar component */}
      </header>
      <main>
        <Provider store={store}>
          {children} {/* Render the children components wrapped with Redux Provider */}
        </Provider>
      </main>
      <footer>
        <Footer /> {/* Render the Footer component */}
      </footer>
    </div>
  );
}
