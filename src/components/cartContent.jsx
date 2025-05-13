import React, { useContext } from "react";
import AboutUs from "./AboutUs";
import { CartContext } from "./CartContext";

const CartContent = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate the total cost of items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.product_cost, 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.product_name}</strong> - Ksh {item.product_cost}
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h4>Total: Ksh {total}</h4>
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    <AboutUs />
    </div>
  );
};

export default CartContent;