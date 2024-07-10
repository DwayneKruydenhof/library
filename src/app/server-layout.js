import { Inter } from "next/font/google"; // Import the Inter font from Google Fonts
import "./globals.css"; // Import global CSS styles

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata = {
  title: "Magic Library", // Title of the application
  description: "This application can be used to look up available books within our magical library", // Description of the application
};

// ServerLayout component that sets up the HTML structure with the Inter font
export default function ServerLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} {/* Render the children components */}
      </body>
    </html>
  );
}
