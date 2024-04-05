/**
 * Renders a review component with the provided username, description, and rating.
 *
 * @param {Object} props - The props object containing the username, description, and rating.
 * @param {string} props.username - The username of the reviewer.
 * @param {string} props.description - The description of the review.
 * @param {number} props.rating - The rating given by the reviewer.
 * @returns {JSX.Element} The rendered review component.
 */

import PropTypes from 'prop-types';

export default function Review({ username, description, rating }) {
  return (
    <div className="review-container">
      <h3>{username}</h3>
      <p>{description}</p>
      <p className="rating">Rating: {rating}</p>
    </div>
  );
}

Review.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};