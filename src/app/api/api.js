// src/utils/api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://openlibrary.org';

export const fetchData = async (book) => {
  try {
    const response = await axios.get(`/search.json?q=${book}`);
    const results = response.data.docs.map((doc) => ({
      key: doc.key,
      title: doc.title,
      author_name: doc.author_name?.join(', '),
      cover_url: `http://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
    }));
    return results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
