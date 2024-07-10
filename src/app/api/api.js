// src/utils/api.js

import axios from 'axios'; // Import axios for making HTTP requests

axios.defaults.baseURL = 'https://openlibrary.org'; // Set base URL for Open Library API

// Function to fetch data from Open Library API based on book search query
export const fetchData = async (book) => {
  try {
    // Send GET request to Open Library API
    const response = await axios.get(`/search.json?q=${book}`);

    // Map response data to desired format
    const results = response.data.docs.map((doc) => ({
      key: doc.key,
      title: doc.title,
      author_name: doc.author_name?.join(', '), // Join author names with comma if present
      cover_url: `http://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`, // Construct cover image URL
    }));

    return results; // Return formatted results
  } catch (error) {
    console.error('Error fetching data:', error); // Log error if data fetching fails
    throw error; // Throw error for handling in calling function
  }
};
