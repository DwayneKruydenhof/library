// src/components/SearchBar.js

import { useRouter } from 'next/navigation';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setResults, setLoading } from '../../features/searchSlice'; // Ensure these are the correct paths
import { fetchData } from '../api/api'; // Import the fetchData function

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const router = useRouter();

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = async (value) => {
    dispatch(setQuery(value));
    dispatch(setLoading(true));
    try {
      const results = await fetchData(value);
      dispatch(setResults(results));
      router.push('/pages/search-results');
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Input.Search
      placeholder="Search for books"
      size="medium"
      value={query}
      onSearch={handleSearch}
      onChange={handleInputChange}
      className='searchBar'
    />
  );
};

export default SearchBar;
