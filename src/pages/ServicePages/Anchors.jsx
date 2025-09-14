import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const Anchors = () => {
  return (
    <>
      <Seo
        title="Anchors | Keene Krib"
        description="Professional installation of tension, passive, and pile anchors for walls, slopes, and unstable sites across Wellington."
        url="https://keenekrib.co.nz/services/anchors"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Anchors Installation"
        heading={
          <>
            <span className="highlight">Anchors</span>
          </>
        }
        description="Engineered anchor systems designed to stabilize walls, slopes, and other challenging sites."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/services/spray-wall.webp"
            alt="Example of anchors installed by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Anchors</h3>

            <p>
              At <strong>Keene Krib</strong>, we specialize in the professional
              installation of ground anchors for retaining walls, slopes, and
              other unstable terrain across Wellington.
              <br />
              Our anchor solutions include <strong>
                tension anchors
              </strong>, <strong>passive anchors</strong>, and{" "}
              <strong>pile anchors</strong>, all engineered to meet precise load
              and site requirements.
            </p>

            <p>
              <strong>Tension anchors</strong> are designed to pull and hold
              structures securely in place, making them ideal for stabilizing
              steep slopes and retaining walls.
              <br />
              <strong>Passive anchors</strong> provide reinforcement for
              existing structures without additional tensioning, helping to
              maintain long-term stability.
              <br />
              <strong>Pile anchors</strong> deliver strong support for new or
              complex installations, ensuring foundations and walls remain safe
              and durable.
            </p>

            <p>
              Our team works closely with engineers and surveyors to design
              anchor systems that maximize stability, comply with local building
              regulations, and extend the lifespan of your structures.
              <br />
              Whether you’re reinforcing an existing retaining wall, securing a
              slope, or installing a new anchor system,{" "}
              <strong>Keene Krib</strong> delivers reliable, high-quality
              solutions tailored to your site’s specific needs.
            </p>

            <p>
              Choosing <strong>Keene Krib</strong> for your anchor projects
              means expert installation, durable results, and peace of mind
              knowing your retaining walls and structures are safe and secure.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Anchor Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img src="/img/icons/pole-walls.svg" alt="Tension Anchors Icon" />
              Tension Anchors – engineered to stabilize slopes and walls
            </li>
            <li>
              <img src="/img/icons/anchors.svg" alt="Passive Anchors Icon" />
              Passive Anchors – ideal for reinforcing existing structures
            </li>
            <li>
              <img
                src="/img/icons/piling-drilling.svg"
                alt="Pile Anchors Icon"
              />
              Pile Anchors – strong, reliable support for new or challenging
              projects
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

export default Anchors;
