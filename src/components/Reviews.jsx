/**
 * Renders a list of reviews.
 * 
 * @param {Array} reviews - An array of review objects.
 * @returns {JSX.Element} - The rendered list of reviews.
 */
import Review from "./Review";

export default function Reviews({ reviews }) {
  return (
    reviews && reviews.map((review) => <Review key={review.id} {...review} />)
  );
}
