import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const WallRepairs = () => {
  return (
    <>
      <Seo
        title="Wall Repairs | Keene Krib"
        description="Professional retaining wall repair services to restore structural integrity and safety for damaged or failing walls across Wellington."
        url="https://keenekrib.co.nz/services/wall-repairs"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Wall Repairs"
        heading={
          <>
            Wall <span className="highlight">Repairs</span>
          </>
        }
        description="We provide expert repair and reinforcement solutions for retaining walls that are cracked, leaning, or failing."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/services/wall-repair.webp"
            alt="Example of a retaining wall repair by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Wall Repairs</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialise in repairing
              retaining walls that have suffered damage or structural failure.
            </p>

            <p>
              Our team carefully inspects each wall to diagnose issues such as
              cracking, leaning, soil movement, or material degradation.
            </p>

            <p>
              Using engineered and cost-effective solutions, we reinforce and
              stabilise walls to restore safety and extend their lifespan
              without requiring full replacement.
            </p>

            <p>
              We work with a variety of wall types including{" "}
              <strong>timber, concrete, block, and stone</strong>, tailoring our
              approach to the wall’s construction and site conditions.
            </p>

            <p>
              Whether it’s a minor repair or a complex reinforcement project,{" "}
              <strong>Keene Krib</strong> delivers reliable solutions that
              comply with local regulations and construction best practices.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Wall Repair Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img
                src="/img/icons/retaining-wall.svg"
                alt="Timber Wall Repair Icon"
              />
              Timber Wall Repairs – fix cracks, reinforce posts, and restore
              stability
            </li>
            <li>
              <img
                src="/img/icons/block-walls.svg"
                alt="Block Wall Repair Icon"
              />
              Block & Segmental Repairs – restore strength and alignment for
              failed block walls
            </li>
            <li>
              <img
                src="/img/icons/concrete-walls.svg"
                alt="Concrete Wall Repair Icon"
              />
              Concrete Wall Reinforcement – engineered solutions to prevent
              future failure
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

export default WallRepairs;
