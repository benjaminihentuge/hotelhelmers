"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Correct imports for Swiper modules in version 11
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Import FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const images: string[] = [
  "/images/bar.webp",
  "/images/bar.webp",
  "/images/bar.webp",
  "/images/bar.webp",
  "/images/bar.webp",
  "/images/bar.webp",
];

const GalleryPage: React.FC = () => {

  return (
    <div className="container bg-black
    ">
      <h1 className="heading">Hotel Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}  // Modules used here
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default GalleryPage;
