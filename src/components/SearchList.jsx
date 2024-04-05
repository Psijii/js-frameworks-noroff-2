
/**
 * Renders a list of search results.
 *
 * @component
 * @param {Object[]} searchResults - An array of search results.
 * @returns {JSX.Element} - The rendered SearchList component.
 */
import SingleSearchResult from "./SearchResult";
// import PropTypes from 'prop-types';

const SearchList = ({ searchResults }) => {
  return (
    <div className="search-list">
      {searchResults.map((searchResult, id) => {
        return <SingleSearchResult key={id} searchResult={searchResult} />;
      })}
    </div>
  );
};
export default SearchList;

// SearchList.propTypes = {
//   searchResults: PropTypes.array.isRequired,
// };
