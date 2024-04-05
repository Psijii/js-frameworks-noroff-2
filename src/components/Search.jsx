import { useState } from "react";
import PropTypes from 'prop-types';
/**
 * SearchBar component that allows users to search for products.
 * @param {Object} props - The component props.
 * @param {Function} props.setSearchResults - The function to set the search results.
 * @returns {JSX.Element} - The rendered SearchBar component.
 */

const SearchBar = ({ setSearchResults }) => {
  const [searchInput, setSearchInput] = useState("");

  /**
   * Fetches data from the API and filters the results based on the search input.
   * @param {string} value - The search input value.
   */

  const fetchData = (value) => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((json) => {
        const searchResults = json.filter((products) => {
          return (
            value &&
            products &&
            products.title &&
            products.title.toLowerCase().includes(value)
          );
        });
        setSearchResults(searchResults);
      });
  };

  /**
   * Handles the change event of the search input.
   * @param {string} value - The new value of the search input.
   */

  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar">
      <form>
        <input
          id="searchInput"
          type="search"
          placeholder="Search for products..."
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput}
        />
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default SearchBar;
