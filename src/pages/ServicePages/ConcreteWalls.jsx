import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const ConcreteWalls = () => {
  return (
    <>
      <Seo
        title="Concrete Walls | Keene Krib"
        description="Engineered concrete wall solutions including shotcrete and poured-in-place walls for commercial and residential projects across Wellington."
        url="https://keenekrib.co.nz/services/concrete-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Concrete Walls"
        heading={
          <>
            Concrete <span className="highlight">Walls</span>
          </>
        }
        description="We provide engineered concrete wall systems designed for strength, durability, and longevity on any scale."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of a concrete wall built by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Concrete Walls</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialise in professional
              concrete retaining wall solutions for residential, commercial, and
              infrastructure projects across Wellington.
              <br />
              Our offerings include <strong>shotcrete</strong>,{" "}
              <strong>poured-in-place</strong>, and reinforced concrete walls
              engineered for long-lasting strength and durability.
            </p>

            <p>
              We carefully design and construct walls to ensure proper
              load-bearing capacity, drainage, and compliance with local
              building codes.
              <br />
              Whether it’s a large commercial site or a residential property,
              our team delivers concrete wall solutions that combine reliability
              and visual appeal.
            </p>

            <p>
              Trust <strong>Keene Krib</strong> for concrete walls that provide
              structural integrity, safety, and longevity, built with industry
              best practices and high-quality materials.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Concrete Wall Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/concrete-walls.svg"
                alt="Concrete Walls Icon"
              />
              Shotcrete & Poured-in-Place – engineered walls for commercial and
              residential projects
            </li>
            <li>
              <img src="/img/icons/anchors.svg" alt="Anchors Icon" />
              Reinforced Concrete – added stability with anchor systems where
              needed
            </li>
            <li>
              <img
                src="/img/icons/retaining-wall.svg"
                alt="Retaining Wall Icon"
              />
              Site Preparation & Drainage – foundation prep for durable,
              long-lasting walls
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

export default ConcreteWalls;
