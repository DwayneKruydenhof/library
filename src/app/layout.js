import { Inter } from "next/font/google"; // Import Inter font from Google Fonts
import "./globals.css"; // Import global CSS styles
import React from 'react';
import ServerLayout from './server-layout'; // Import ServerLayout component
import ClientProvider from './ClientProvider'; // Import ClientProvider component

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata = {
  title: "Magic Library", // Title of the application
  description: "This application can be used to look up available books within our magical library", // Description of the application
};

// RootLayout component wraps children components with ServerLayout and ClientProvider
export default function RootLayout({ children }) {
  return (
    <ServerLayout>
      <ClientProvider>
        {children} {/* Render children components */}
      </ClientProvider>
    </ServerLayout>
  );
}
