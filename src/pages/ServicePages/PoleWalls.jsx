import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const PoleWalls = () => {
  return (
    <>
      <Seo
        title="Pole Walls | Keene Krib"
        description="Specialist pole wall systems designed for steep gradients and challenging terrain across Wellington."
        url="https://keenekrib.co.nz/services/pole-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Pole Walls"
        heading={
          <>
            Pole <span className="highlight">Walls</span>
          </>
        }
        description="Our pole wall systems use treated timber or steel posts combined with reinforced earth techniques to build strong, durable walls up to 6 metres high."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/services/timber-wall.webp"
            alt="Example of a pole wall built by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Pole Walls</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialise in engineering pole
              walls for steep slopes and challenging terrain.
            </p>

            <p>
              Our pole walls are constructed using{" "}
              <strong>treated timber or steel posts</strong> combined with
              reinforced earth techniques, ensuring both strength and stability.
            </p>

            <p>
              With years of experience working across Wellington’s varied
              landscapes, we understand how to maintain{" "}
              <strong>structural integrity</strong> under difficult
              environmental conditions.
            </p>

            <p>
              Whether stabilising a hillside for a subdivision or securing a
              steep residential property, our team provides reliable, compliant
              solutions tailored to your site.
            </p>

            <p>
              From material selection to installation and maintenance,{" "}
              <strong>Keene Krib</strong> delivers expert craftsmanship and
              professional service.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Pole Wall Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/pole-walls.svg"
                alt="Timber Pole Walls Icon"
              />
              Timber Pole Walls – strong, durable, and naturally blending into
              the landscape
            </li>
            <li>
              <img src="/img/icons/anchors.svg" alt="Steel Pole Walls Icon" />
              Steel Pole Walls – engineered for high-load and challenging slopes
            </li>
            <li>
              <img
                src="/img/icons/retaining-wall.svg"
                alt="Reinforced Earth Icon"
              />
              Reinforced Earth – stabilising earth retention for long-term
              structural integrity
            </li>
          </ul>
        </div>

        <div className="call-to-action-button-holder">
          <Link to="/contact" className="secondary-button">
            Contact Us
          </Link>

          <Link to="/contact" className="primary-button">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default PoleWalls;
