import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import futurepd1 from '../../futurepd/futurepd1.jpg'
import futurepd2 from '../../futurepd/futurepd2.jpg'
import futurepd3 from '../../futurepd/futurepd3.jpg'
import futurepd4 from '../../futurepd/futurepd4.jpg'
import futurepd5 from '../../futurepd/futurepd5.jpg'
import futurepd6 from '../../futurepd/futurepd6.jpg'
import futurepd7 from '../../futurepd/futurepd7.jpg'
import futurepd8 from '../../futurepd/futurepd8.jpg'
import futurepd9 from '../../futurepd/futurepd9.jpg'
const FutureProduct = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center text-primary my-4'>Future Products</h2>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={futurepd1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={futurepd9} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default FutureProduct;