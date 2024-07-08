// src/components/SearchBar.js

import { useRouter } from 'next/navigation';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setResults } from '../../features/searchSlice'; // Ensure these are the correct paths
import axios from 'axios';

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const router = useRouter();

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const fetchData = async (book) => {
    try {
      console.log('Fetching data for:', book);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${book}`);
      console.log('Response:', response);
      const results = response.data.docs.map((doc) => ({
        key: doc.key,
        title: doc.title,
        author_name: doc.author_name?.join(', '),
        cover_url: `http://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
      }));
      console.log('Fetched Results:', results);
      dispatch(setResults(results));
      router.push('/pages/search-results');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (value) => {
    dispatch(setQuery(value));
    fetchData(value);
  };

  return (
    <Input.Search
      placeholder="Search for books"
      enterButton="Search"
      size="medium"
      value={query}
      onSearch={handleSearch}
      onChange={handleInputChange}
      style={{ width: 500 }}
    />
  );
};

export default SearchBar;
