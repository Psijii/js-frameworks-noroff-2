/**
 * Renders a list of reviews.
 * 
 * @param {Array} reviews - An array of review objects.
 * @returns {JSX.Element} - The rendered list of reviews.
 */
import Review from "./Review";
// import PropTypes from 'prop-types';

export default function Reviews({ reviews }) {
  return (
    reviews && reviews.length > 0 ? (
      reviews.map((review) => <Review key={review.id} {...review} />)
    ) : (
      <p>No reviews available</p>
    )
  );
}

// Reviews.propTypes = {
//   reviews: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//   })).isRequired,
// };