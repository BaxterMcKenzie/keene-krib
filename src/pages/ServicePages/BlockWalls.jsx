import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const BlockWalls = () => {
  return (
    <>
      <Seo
        title="Crib Walls | Keene Krib"
        description="Durable segmental crib walls reinforced with geogrid, perfect for residential gardens and commercial landscaping across Wellington."
        url="https://keenekrib.co.nz/services/crib-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Crib Walls"
        heading={
          <>
            Crib <span className="highlight">Walls</span>
          </>
        }
        description="Segmental crib walls engineered for strength, durability, and aesthetic appeal, reinforced with geogrid for extra stability."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/crib-wall-services.JPG"
            alt="Example of a crib wall built by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Crib Walls</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialize in designing and
              constructing segmental crib walls that balance strength with
              visual appeal.
              <br />
              Our walls are reinforced with geogrid, providing long-lasting
              stability and making them perfect for residential gardens,
              commercial landscaping, and multi-level terraces.
            </p>

            <p>
              We understand Wellington’s unique soil and terrain conditions,
              allowing us to engineer walls that manage earth pressures
              effectively while maintaining a clean, professional finish.
              <br />
              Each wall is tailored to the specific site and project
              requirements, whether decorative or structural.
            </p>

            <p>
              Using high-quality materials and proven engineering techniques, we
              ensure every crib wall stands the test of time.
              <br />
              Our craftsmanship and attention to detail make{" "}
              <strong>Keene Krib</strong> a trusted partner for landscaping and
              retaining wall solutions.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Crib Wall Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/block-walls.svg"
                alt="Segmental Crib Walls Icon"
              />
              Segmental Crib Walls – durable, engineered for residential and
              commercial landscaping
            </li>
            <li>
              <img
                src="/img/icons/pole-walls.svg"
                alt="Geogrid Reinforced Icon"
              />
              Geogrid Reinforcement – extra stability for multi-level or high
              retaining walls
            </li>
            <li>
              <img src="/img/icons/retaining-wall.svg" alt="Earthworks Icon" />
              Site Preparation & Earthworks – ensuring strong foundations and
              proper drainage
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

export default BlockWalls;
