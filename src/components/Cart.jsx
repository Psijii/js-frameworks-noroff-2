
/**
 * Renders a single cart item with its title and discounted price.
 * @param {Object} cartItem - The cart item object.
 * @param {string} cartItem.title - The title of the cart item.
 * @param {number} cartItem.discountedPrice - The discounted price of the cart item.
 * @returns {JSX.Element} The rendered cart item component.
 */
import React from "react";

export default function CartProducts({ cartItem }) {
  const { title, discountedPrice } = cartItem;


  return (
    <div className="cart-item">
      <div className="product-info">
        <h2>{title}</h2>
        <p>Price: {discountedPrice} NOK</p>
      </div>
    </div>
  );
}
