import React, { useState } from "react";
import "./Navbar.css"



export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    return (

        <nav>

            <div className="container">

                <div 
                onClick= {() => setShowMenu(true)} 
                className={`mobile-hamburger ${showMenu ? "hide-mobile-hamburger" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${showMenu ? "show-nav-links" : ""}`}>

                <div 
                 onClick= {() => setShowMenu(false)} 
                className={`close-hamburger ${showMenu ? "show-close-hamburger" : ""}`}>
                    <span></span>
                    <span></span>
                </div>

                <li><a href="#collections">Collection</a></li> 
                <li><a href="#men">Men</a></li> 
                <li><a href="#women">Women</a></li> 
                <li><a href="#about">About</a></li> 
                <li><a href="#contact">Contact</a></li> 
                </ul>

                <div className="profile-cart-container">

                    <div className="cart">
                        <img src="src/assets/icon-cart.svg" alt="Cart" />
                    </div>
                    <div className="avatar">
                        <img src="src/assets/image-avatar.png" alt="Avatar" />
                    </div>

                </div>
            </div>
            

        </nav>

    )

}