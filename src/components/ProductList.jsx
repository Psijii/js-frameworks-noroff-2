/**
 * Renders a list of products.
 *
 * @param {Object[]} products - An array of product objects.
 * @returns {JSX.Element|null} The rendered product list or null if no products are provided.
 */
import { Product } from "./Product";
// import PropTypes from 'prop-types';

export default function ProductList({ products = [] }) {

  return (
    <div className="product-container">
      {products.map((productData) => (
        <Product key={productData.id} productData={productData} />
      ))}
    </div>
  );
}

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   })),
// };
