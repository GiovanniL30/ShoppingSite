import React, { useEffect, useState } from "react";
import ProductCarousel from "./ProductCarousel";
import ProductInformation from "./ProductInformation";
import "./CurrentImage.css";
import "./Main.css";
import { currentContext, productsContext } from "../../ProductContext";
import { cartContext, updateCartContext } from "../../ProductContext";
import MobileCarousel from "./MobileCarousel";

export default function Product() {
  const currentItem = currentContext();
  const setCart = updateCartContext();
  const cart = cartContext();
  const [quantity, setQuantity] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function addToCart() {
    if (quantity === 0) return;

    const newItem = {
      ...currentItem,
      quantity: quantity,
    };

    setCart((prevData) => {
      const existingItem = prevData.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevData.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: quantity + item.quantity }
            : item
        );
      } else {
        return [newItem, ...prevData];
      }
    });

    setQuantity(1);
  }

  function handleClick(event) {
    const { name } = event.target;

    if (name === "decrease" && quantity === 0) return;

    setQuantity((prevData) => (prevData += name === "decrease" ? -1 : 1));
  }

  if (!currentItem)
    return (
      <h1 style={{ margin: "auto", textAlign: "center" }}>
        Loading Products...
      </h1>
    );

  return (
    <>
      <div className="main-container">
        <ProductInformation>
          <h1 className="item-title">{currentItem.title}</h1>
          <p className="item-description">{currentItem.description}</p>
          <p className="item-price">${currentItem.price}</p>

          <div className="quantity">
            <button onClick={handleClick} name="decrease">
              -
            </button>
            <input min={1} disabled={true} type="number" value={quantity} />
            <button onClick={handleClick} name="increase">
              +
            </button>
          </div>

          <button onClick={addToCart} className="add-to-cart-btn">
            Add To Cart
          </button>
        </ProductInformation>
        <div className="second-container">
          {windowWidth <= 1024 ? (
            <MobileCarousel setQuantity={setQuantity} />
          ) : (
            <img className="current-image" src={currentItem.image} alt="" />
          )}
          {windowWidth > 1024 && <ProductCarousel setQuantity={setQuantity} />}
        </div>
      </div>
    </>
  );
}
