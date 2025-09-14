import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const PilingDrilling = () => {
  return (
    <>
      <Seo
        title="Piling & Drilling | Keene Krib"
        description="Expert piling and drilling services using timber, concrete, or steel foundations for residential and commercial projects in Wellington."
        url="https://keenekrib.co.nz/services/piling-drilling"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Piling and Drilling"
        heading={
          <>
            Piling & <span className="highlight">Drilling</span>
          </>
        }
        description="Providing stable foundations with timber, concrete, or steel piling and drilling services tailored to your project."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/services/piling.webp"
            alt="Example of piling and drilling work by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Piling & Drilling</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialize in professional
              piling and drilling solutions to provide strong, stable
              foundations for residential and commercial structures.
            </p>

            <p>
              We work with <strong>timber, concrete, and steel piles</strong>,
              selecting the appropriate method to suit your site’s soil type,
              load requirements, and project specifics.
            </p>

            <p>
              Our team is experienced in handling complex terrain and
              challenging sites, ensuring safe, compliant, and durable
              installations.
            </p>

            <p>
              From planning to precise installation, <strong>Keene Krib</strong>{" "}
              delivers engineered solutions that give your build the
              foundational support it needs to last.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Piling & Drilling Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/piling-drilling.svg"
                alt="Timber Piles Icon"
              />
              Timber Piles – strong, sustainable foundations for residential
              projects
            </li>
            <li>
              <img
                src="/img/icons/concrete-walls.svg"
                alt="Concrete Piles Icon"
              />
              Concrete Piles – durable support for commercial and large-scale
              structures
            </li>
            <li>
              <img src="/img/icons/anchors.svg" alt="Steel Piles Icon" />
              Steel Piles – ideal for high-load and complex site conditions
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

export default PilingDrilling;
