import { 
  createContext, 
  useState, useEffect 
} from "react";

/**
 * @typedef {Object} Product
 * @property {number} id - The ID of the product.
 * @property {string} name - The name of the product.
 * @property {number} discountedPrice - The discounted price of the product.
 */

/**
 * @typedef {Object} CartContextValue
 * @property {function(Product): void} addToCart - Function to add a product to the cart.
 * @property {function(number): void} removeFromCart - Function to remove a product from the cart.
 * @property {function(): void} clearCart - Function to clear the cart.
 * @property {number} total - The total price of all products in the cart.
 * @property {Product[]} cart - The array of products in the cart.
 */

/**
 * Context for managing the cart state and providing cart-related functions.
 * @type {import("react").Context<CartContextValue>}
 */
export const CartContext = createContext();

/**
 * Component that provides the cart context to its children.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} The cart provider component.
 */
export default function CartProvider({ children }) {
  const key = "cart";

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem(key);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart]);

  /**
   * Function to add a product to the cart.
   * @param {Product} product - The product to add to the cart.
   */
  function addToCart(product) {
    setCart([...cart, product]);
  }

  /**
   * Function to remove a product from the cart.
   * @param {number} productId - The ID of the product to remove.
   */
  function removeFromCart(productId) {
    setCart(cart.filter((item) => item.id !== productId));
  }

  /**
   * Function to clear the cart.
   */
  function clearCart() {
    localStorage.removeItem(key);
    setCart([]);
  }

  /**
   * The total price of all products in the cart.
   * @type {number}
   */
  const total = cart.reduce((total, product) => total + product.discountedPrice, 0);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        total,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
