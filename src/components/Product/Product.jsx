import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import ProductInformation from "./ProductInformation";
import "./CurrentImage.css"
import "./Main.css"
import { currentContext, productsContext } from "../../ProductContext";
import { cartContext, updateCartContext } from "../../ProductContext";


export default function Product() {
    const currentItem = currentContext()
    const setCart = updateCartContext()

    const [quantity, setQuantity] = useState(1)

    function addToCart() {
        if (quantity === 0) return;
      
        const newItem = {
          ...currentItem,
          quantity: quantity
        };
      
        setCart(prevData => {
          const existingItem = prevData.find(item => item.id === newItem.id);
          
          if (existingItem) {
            return prevData.map(item =>
              item.id === newItem.id ? { ...item, quantity: quantity + item.quantity } : item
            );
          } else {
            return [newItem, ...prevData];
          }
        });

      }

    function handleClick(event) {
        const {name} = event.target

        if(name === "decrease" && quantity === 0) return

        setQuantity(prevData => prevData += (name === "decrease") ? -1 : 1)
    }

    if(!currentItem) return <h1>Loading</h1>


    return (
        <>   
        <img className="current-image" src={currentItem.image} alt="" />
        <div className="main-container">
            
                <ProductCarousel setQuantity={setQuantity} />
                <ProductInformation >
                    <h1 className="item-title">{currentItem.title}</h1>
                    <p className="item-description">{currentItem.description}</p>
                    <p className="item-price">${currentItem.price}</p>

                    <div className="quantity">
                        <button onClick={handleClick} name="decrease">-</button>
                        <input min={1} disabled={true}type="number" value={quantity}/>
                        <button onClick={handleClick} name="increase">+</button>
                    </div>

                    <button 
                    onClick={addToCart}
                    className="add-to-cart-btn">
                        
                        Add To Cart
                    </button>
                </ProductInformation>
           
        </div>   
       
        </>
    )

}