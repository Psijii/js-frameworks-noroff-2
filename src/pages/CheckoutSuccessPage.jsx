/**
 * Renders the checkout success page.
 * @returns {JSX.Element} The rendered checkout success page.
 */
import styles from "../components/Button.module.css";
import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div className="checkout-success">
      <h1>Successfully checked out.</h1>
      <Link to="/">
        <button
          style={{
            width: "150px",
            margin: "0 auto", 
            display: "block", 
          }}
          className={styles.primary}>
          Back to home page
        </button>
      </Link>
    </div>
  );
}
