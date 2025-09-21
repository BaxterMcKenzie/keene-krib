import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="overlay-button-holder">
      <button
        className="secondary-button"
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </button>
      <button
        className="primary-button"
        onClick={() => navigate("/quote")}
      >
        Get a Quote
      </button>
    </div>
  );
};

const HeroCarousel = ({
  image = "/img/assets/crib-hero-home.webp",
  alt = "Holding up Wellington for over 40 years",
  heading = (
    <>
      Holding up <span className="highlight">Wellington</span>
      <br />
      for over 40 years
    </>
  ),
  description = "Keene Krib is a family-owned Wellington business specializing in retaining walls, pole walls, piling, and landscaping.",
  showButtons = true,
  small = false,  // new prop
}) => {
  return (
    <div className={`hero-carousel ${small ? "hero-carousel-small" : ""}`}>
      <div className="slide">
        <img src={image} alt={alt} className="slide-image" />
        <div className="slide-overlay">
          <h2 className="h2-hero">{heading}</h2>
          <p className="slide-description">{description}</p>
          {showButtons && <HeaderButtons />}
        </div>
      </div>
    </div>
  );
};


export default HeroCarousel;
