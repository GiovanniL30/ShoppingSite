import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import { ProductContext } from "./ProductContext";


export default function App() {
  

  return (
    <>
    <ProductContext>
      <Navbar />
       <div className="wrapper container">  
        <Product />
      </div>
    </ProductContext>
    </>
    
  )
}