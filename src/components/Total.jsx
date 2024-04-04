/**
 * Component that displays the total amount in the cart.
 * @returns {JSX.Element} The Total component.
 */
import { useContext } from "react";
import { CartContext } from "../components/CartProvider";

export default function Total() {
  const { total } = useContext(CartContext);
  return <div>Your total is: {parseFloat(total).toFixed(2)} NOK</div>;
}
