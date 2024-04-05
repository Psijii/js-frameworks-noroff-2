/**
 * Renders a product card with an image, title, and a button to view more details.
 *
 * @component
 * @param {Object} productData - The data of the product to be displayed.
 * @param {string} productData.imageUrl - The URL of the product image.
 * @param {string} productData.title - The title of the product.
 * @param {string} productData.id - The ID of the product.
 * @returns {JSX.Element} The rendered product card.
 */
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'; 

import "./Product.css";

import styles from "./Button.module.css";

export function Product({ productData }) {
  return (
    <div className="card">
      <img src={productData.imageUrl} alt={productData.title} />
      <Link to={`/productPage/${productData.id}`}>
        <button className={styles.primary}>View {productData.title}</button>
      </Link>
    </div>
  );
}

// Product.propTypes = {
//   productData: PropTypes.shape({
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }).isRequired,
// };

