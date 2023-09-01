import React, { useState } from "react";
import {
  productsContext,
  currentContext,
  updateCurrentContext,
} from "../../ProductContext";
import "./MobileCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

export default function MobileCarousel({ setQuantity }) {
  const products = productsContext();
  const setItem = updateCurrentContext();

  function handleChange(event) {
    const newIndex = event.activeIndex;
    const newCurrentItem = products[newIndex];
    setItem(newCurrentItem);
    setQuantity(1);
  }

  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        onSlideChange={handleChange}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {products.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
