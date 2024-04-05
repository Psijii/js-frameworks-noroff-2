/**
 * Renders a single search result item.
 *
 * @component
 * @param {Object} searchResult - The search result object.
 * @param {string} searchResult.id - The ID of the search result.
 * @param {string} searchResult.title - The title of the search result.
 * @returns {JSX.Element} The rendered SingleSearchResult component.
 */
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleSearchResult = ({ searchResult }) => {
  return (
    <div className="search-result">
      <Link to={`/productPage/${searchResult.id}`}>{searchResult.title}</Link>
    </div>
  );
};
export default SingleSearchResult;

SingleSearchResult.propTypes = {
  searchResult: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};