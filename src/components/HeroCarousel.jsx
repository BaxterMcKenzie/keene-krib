import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/img/assets/krib-wall.jpg",
      heading: "Crib Walls",
      description: "Strong, durable, and environmentally friendly retaining wall solutions.",
    },
    {
      id: 2,
      image: "/img/assets/krib-wall.jpg",
      heading: "Crib Walls",
      description: "Strong, durable, and environmentally friendly retaining wall solutions.",
    },
  ];

  return (
    <div className="hero-carousel">
      <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 4000 }} loop>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img src={slide.image} alt={slide.heading} className="slide-image" />
              <div className="slide-overlay">
                <h2>{slide.heading}</h2>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
