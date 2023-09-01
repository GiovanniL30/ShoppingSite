import React, {useState} from "react";
import { productsContext, currentContext, updateCurrentContext } from "../../ProductContext";
import "./Carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';




export default function ProductCarousel({setQuantity}) {
    const products = productsContext()
    const currentItem = currentContext()
    const setCurrentItem = updateCurrentContext()



    function handleClick( id) {
       setCurrentItem( products.find(item => item.id === id))
       setQuantity(1)
    }

    return (

        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            centeredSlides={true}
        className="mySwiper"
      >
        {products.map(item => {
            return (
                <SwiperSlide >
                    <div className={`img-container ${item.id === currentItem.id ? "active-item": ""}`}>
                        <img onClick={() => handleClick(item.id)} src={item.image} alt="" />
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>

    )
}