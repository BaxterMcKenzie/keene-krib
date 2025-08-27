import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const RetainingWalls = () => {
  return (
    <>
      <Seo
        title="Retaining Walls | Keene Krib"
        description="Custom timber, concrete, and stone retaining wall solutions across Wellington."
        url="https://keenekrib.co.nz/services/retaining-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Retaining Walls"
        heading={
          <>
            Retaining <span className="highlight">Walls</span>
          </>
        }
        description="We build structural retaining walls designed to hold back soil and shape your land for safety and usability."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of a retaining wall built by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Retaining Walls</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialise in designing and
              constructing retaining walls that are both{" "}
              <strong>structurally sound</strong> and{" "}
              <strong>aesthetically pleasing</strong>.
            </p>

            <p>
              With over 40 years of experience across Wellington’s diverse
              terrain, we create walls that hold back more than just soil — they{" "}
              <strong>
                shape safe, functional, and beautiful outdoor spaces
              </strong>
              .
            </p>

            <p>
              We work with a wide range of materials including{" "}
              <strong>
                timber, concrete, crib blocks, stone, and segmental retaining
                systems
              </strong>
              , selecting the right approach based on engineering requirements
              and site conditions.
            </p>

            <p>
              From <strong>residential garden walls</strong> to{" "}
              <strong>large-scale civil or subdivision projects</strong>, we
              deliver custom solutions designed for safety, durability, and
              compliance with local building regulations.
            </p>

            <p>
              We also offer <strong>repairs and reinforcement</strong> for
              damaged or failing retaining structures, ensuring your walls
              remain strong and reliable for years to come.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Retaining Wall Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/retaining-wall.svg"
                alt="Timber Retaining Walls Icon"
              />
              Timber Walls – durable, visually appealing, and engineered for
              strength
            </li>
            <li>
              <img
                src="/img/icons/concrete-walls.svg"
                alt="Concrete Retaining Walls Icon"
              />
              Concrete Walls – engineered for maximum load-bearing capacity and
              long-term durability
            </li>
            <li>
              <img
                src="/img/icons/block-walls.svg"
                alt="Block Retaining Walls Icon"
              />
              Block & Segmental Systems – versatile solutions for residential
              and commercial projects
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

export default RetainingWalls;
