/**
 * Renders a list of products.
 *
 * @param {Object[]} products - An array of product objects.
 * @returns {JSX.Element|null} The rendered product list or null if no products are provided.
 */
import { Product } from "./Product";

export default function ProductList({ products }) {
  if (!products || !products.length) {
    return null; 
  }

  return (
    <div className="product-container">
      {products.map((productData) => (
        <Product key={productData.id} productData={productData} />
      ))}
    </div>
  );
}
