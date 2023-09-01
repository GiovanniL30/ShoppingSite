import React, { useState } from "react";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import { cartContext } from "../../ProductContext";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cart = cartContext(0);

  function handleCartOpen() {
    setCartOpen((prevData) => !prevData);
  }

  return (
    <nav>
      <div className="container con-wrapper">
        <div
          onClick={() => setShowMenu(true)}
          className={`mobile-hamburger ${
            showMenu ? "hide-mobile-hamburger" : ""
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${showMenu ? "show-nav-links" : ""}`}>
          <div
            onClick={() => setShowMenu(false)}
            className={`close-hamburger ${
              showMenu ? "show-close-hamburger" : ""
            }`}
          >
            <span></span>
            <span></span>
          </div>

          <li className="active-li">
            <a href="#collections">Collection</a>
          </li>
          <li>
            <a href="#men">Men</a>
          </li>
          <li>
            <a href="#women">Women</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="profile-cart-container">
          <div className="cart">
            {cart.length !== 0 && (
              <span onClick={handleCartOpen} className="cart-count">
                {cart.length}
              </span>
            )}
            <img
              onClick={handleCartOpen}
              src="src/assets/icon-cart.svg"
              alt="Cart"
            />
            <Cart cartOpen={cartOpen} />
          </div>

          <div className="avatar">
            <img src="src/assets/image-avatar.png" alt="Avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}
