/**
 * Renders a single product with its details, including title, image, description, price, and reviews.
 * Allows users to add the product to the cart.
 *
 * @component
 * @param {Object} props - The props object containing the product details.
 * @param {string} props.id - The unique identifier of the product.
 * @param {string} props.title - The title of the product.
 * @param {string} props.imageUrl - The URL of the product image.
 * @param {string} props.description - The description of the product.
 * @param {number} props.discountedPrice - The discounted price of the product.
 * @param {number} props.price - The original price of the product.
 * @param {Array} props.reviews - An array of reviews for the product.
 * @returns {JSX.Element} The rendered single product component.
 */
import { useContext } from "react";
import { CartContext } from "./CartProvider";

import "./Product.css";

import styles from "./Button.module.css";
import Reviews from "./Reviews";


export default function SingleProduct({
  id,
  title,
  imageUrl,
  description,
  discountedPrice,
  price,
  reviews,
}) {
  const { addToCart } = useContext(CartContext);

  const diff = price - discountedPrice;

  return (
    <div id={id}>
      <h1 className="product-title">{title}</h1>
      <div className="single-product-card">
        <img src={imageUrl} alt={title} />
        <div>
          <p>{description}</p>
          <p className="price-text">
          <i class="fa-solid fa-tag"></i> {discountedPrice}{" "}
            NOK
          </p>
          <p className="sale-text">
            {discountedPrice === price
              ? ""
              : `This item is on sale! Save ${diff} NOK today!`}
          </p>
          <button
            className={styles.secondary}
            onClick={() => addToCart({ id, title, discountedPrice })}>
            Add to bag
          </button>
        </div>
      </div>
      <div className="reviews">
        <h2>
          {reviews?.length === 0 ? "This item has no reviews yet!" : `Reviews`}
        </h2>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
