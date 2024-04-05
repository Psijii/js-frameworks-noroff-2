/**
 * Navigation component for the application.
 * Renders a navigation bar with links to different pages and a cart button.
 */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartProvider";

import "../../App.css";


export default function Nav() {
  const { cart } = useContext(CartContext) || { cart: [] }; // Provide a default value for cart if CartContext is undefined
  const cartItemCount = cart.length;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactPage">Contact</Link>
        </li>
        <li>
          <Link to="/checkoutPage">
            <button className="cart-btn">
              {cartItemCount} <i className="fa-solid fa-cart-shopping"></i> 
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
