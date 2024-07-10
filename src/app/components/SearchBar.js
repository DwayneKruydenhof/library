import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js for routing
import { Input } from 'antd'; // Import Input component from Ant Design
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React-Redux
import { setQuery, setResults, setLoading } from '../../features/searchSlice'; // Import Redux actions from searchSlice
import { fetchData } from '../api/api'; // Import fetchData function from api file

// SearchBar component definition
const SearchBar = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions
  const query = useSelector((state) => state.search.query); // Retrieve query state from Redux store
  const router = useRouter(); // Initialize useRouter hook for routing

  // Function to handle input change
  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value)); // Dispatch setQuery action to update query state
  };

  // Function to handle search
  const handleSearch = async (value) => {
    dispatch(setQuery(value)); // Dispatch setQuery action with search value
    dispatch(setLoading(true)); // Dispatch setLoading action to indicate loading state
    try {
      const results = await fetchData(value); // Call fetchData function with search value to fetch data
      dispatch(setResults(results)); // Dispatch setResults action to update search results in Redux store
      router.push('/pages/search-results'); // Navigate to search results page using router
    } catch (error) {
      console.error('Error during search:', error); // Log error if search fails
    } finally {
      dispatch(setLoading(false)); // Dispatch setLoading action to indicate loading state is false
    }
  };

  // Render Input.Search component from Ant Design
  return (
    <Input.Search
      placeholder="Search for books"
      size="large"
      value={query}
      onSearch={handleSearch}
      onChange={handleInputChange}
      className='searchBar' // Apply custom CSS class for styling
    />
  );
};

export default SearchBar; // Export SearchBar component
