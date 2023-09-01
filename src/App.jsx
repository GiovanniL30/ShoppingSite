import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import { ProductContext } from "./ProductContext";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <ProductContext>
        <Navbar />
        <div className="wrapper container">
          <Product />
        </div>
      </ProductContext>
      <Footer>
        <h1 className="developer">developer: Giovanni Leo</h1>

        <a target={"_blank"} href="https://github.com/GiovanniL30">
          <img src="src/assets/github-icon.png" alt="" />
        </a>

        <a target={"_blank"} href="https://www.facebook.com/gi0.Leo/">
          <img src="src/assets/facebook-icon.png" alt="" />
        </a>
      </Footer>
    </>
  );
}
