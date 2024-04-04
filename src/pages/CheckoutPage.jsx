/**
 * Renders the CheckoutPage component.
 * @returns {JSX.Element} The rendered CheckoutPage component.
 */
import Checkout from "../components/Checkout";

export default function CheckoutPage() {
  return (
    <div className="checkout-card">
      <h1>Your cart</h1>
      <Checkout />

    </div>
  );
}
