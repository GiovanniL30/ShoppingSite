import React from "react";
import {
  cartContext,
  updateCartContext,
  productsContext,
  currentContext,
  updateCurrentContext,
} from "../../ProductContext";
import "./Cart.css";

export default function Cart({ cartOpen }) {
  const cart = cartContext();
  const products = productsContext();
  const setCart = updateCartContext();

  console.log(cartOpen);

  function handleDelete(id) {
    setCart((prevData) => prevData.filter((item) => item.id !== id));
  }

  return (
    <div className={`cart-wrapper ${cartOpen ? "open-cart" : ""}`}>
      {cart.length !== 0 && (
        <>
          <h1>Cart</h1>
          <hr />
        </>
      )}

      {cart.length === 0 ? (
        <h1 style={{ margin: "auto" }}>Your cart is empty</h1>
      ) : (
        <div className={`item-container `}>
          {cart.map((item) => {
            return (
              <div className="cart-item-container">
                <img className="cart-item-image" src={item.image} alt="" />
                <div className="cart-item-info">
                  <p>{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>${Math.floor(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <img
                  onClick={() => handleDelete(item.id)}
                  className="delete-btn"
                  src="src/assets/icon-delete.svg"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      )}

      {cart.length !== 0 && <button className="check-out">Checkout</button>}
    </div>
  );
}
