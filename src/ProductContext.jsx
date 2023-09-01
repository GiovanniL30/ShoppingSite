import React, { useState, useContext, createContext, useEffect } from "react";

const CurrentProduct = createContext();
const UpdateCurrentProduct = createContext();
const ProductsContext = createContext();
const UpdateProductContext = createContext();
const CartContext = createContext();
const UpdateCartContext = createContext();

export function currentContext() {
  return useContext(CurrentProduct);
}

export function updateCurrentContext() {
  return useContext(UpdateCurrentProduct);
}

export function productsContext() {
  return useContext(ProductsContext);
}

export function cartContext() {
  return useContext(CartContext);
}

export function updateCartContext() {
  return useContext(UpdateCartContext);
}

export function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProdut] = useState({});
  const [cart, setCart] = useState(
    (localStorage.getItem("cart-items") &&
      JSON.parse(localStorage.getItem("cart-items"))) ||
      []
  );

  //fetch API
  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
    }

    fetchAPI();
  }, []);

  useEffect(() => {
    setCurrentProdut(products[0]);
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductsContext.Provider value={products}>
      <CurrentProduct.Provider value={currentProduct}>
        <UpdateCurrentProduct.Provider value={setCurrentProdut}>
          <CartContext.Provider value={cart}>
            <UpdateCartContext.Provider value={setCart}>
              {children}
            </UpdateCartContext.Provider>
          </CartContext.Provider>
        </UpdateCurrentProduct.Provider>
      </CurrentProduct.Provider>
    </ProductsContext.Provider>
  );
}
