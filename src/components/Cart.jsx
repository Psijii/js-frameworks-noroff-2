
/**
 * Renders a single cart item with its title and discounted price.
 * @param {Object} props - The component props.
 * @param {Object} props.cartItem - The cart item object.
 * @param {string} props.cartItem.title - The title of the cart item.
 * @param {number} props.cartItem.discountedPrice - The discounted price of the cart item.
 * @returns {JSX.Element} The rendered cart item component.
 */
import React from "react";
import PropTypes from 'prop-types'; 

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

CartProducts.propTypes = {
  cartItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    discountedPrice: PropTypes.number.isRequired,
  }).isRequired,
};
