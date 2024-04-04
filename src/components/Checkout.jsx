/**
 * Checkout component displays the cart items, total price, and payment section.
 * If the cart is empty, it displays a message.
 */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartProvider";

import styles from "./Button.module.css";

import CartProducts from "./Cart";
import Total from "./Total";
import Payment from "./Payment";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      {cart?.length > 0 ? (
        <div>
          {cart.map((cartItem) => {
            return <CartProducts key={cartItem.id} cartItem={cartItem} />;
          })}
          <hr></hr>
          <Total />
          <h3 className="payment">Payment</h3>
          <Payment />
        </div>
      ) : (
        <h2 className="empty-cart">Your cart is empty!</h2>
      )}

      {cart?.length > 0 ? (
        <Link to="/checkoutSuccessPage">
          <button className={styles.primary} onClick={clearCart}>
            Checkout
          </button>
        </Link>
      ) : (
        <div className="empty-cart-btn">
          <Link to="/">
            <button className={styles.primary}>Back to shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}
