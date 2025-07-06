import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/img/assets/crib-wall.jpg",
      headingBefore: "Holding up",
      headingHighlight: "Wellington",
      headingAfter: "for over 40 years",
      description:
        "Keene Krib is a family-owned Wellington business specializing in retaining walls, pole walls, piling, and landscaping.",
    },
    // {
    //   id: 2,
    //   image: "/img/assets/crib-wall.jpg",
    //   headingBefore: "Holding up",
    //   headingHighlight: "Wellington",
    //   headingAfter: "for over 40 years",
    //   description:
    //     "Keene Krib is a family-owned Wellington business specializing in retaining walls, pole walls, piling, and landscaping. With over 40 years of experience, we deliver reliable, high-quality solutions primarily throughout Wellington and the greater region, with the capability to take on projects further afield.",
    // },
  ];

  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img
                src={slide.image}
                alt={`${slide.headingBefore}${slide.headingHighlight}${slide.headingAfter}`}
                className="slide-image"
              />
              <div className="slide-overlay">
                <h2 className="h2-hero">
                  {slide.headingBefore}{" "}
                  <span className="highlight">{slide.headingHighlight}</span>
                  <br />
                  {slide.headingAfter}
                </h2>
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
