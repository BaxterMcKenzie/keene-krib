import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const MicropilesGrouting = () => {
  return (
    <>
      <Seo
        title="Micropiles & Grouting | Keene Krib"
        description="Specialist micropiles and grouting solutions to stabilize structures and improve ground integrity in constrained or poor soil conditions across Wellington."
        url="https://keenekrib.co.nz/services/micropiles-grouting"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Micropiles and Grouting"
        heading={
          <>
            Micropiles & <span className="highlight">Grouting</span>
          </>
        }
        description="Advanced ground improvement techniques designed for challenging soil conditions and constrained sites."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/services/micropile.webp"
            alt="Example of micropiles and grouting by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Micropiles & Grouting</h3>

            <p>
              At <strong>Keene Krib</strong>, we provide specialist micropiling
              and injection grouting services to strengthen foundations and
              improve ground stability in difficult soil conditions.
            </p>

            <p>
              <strong>Micropiles</strong> are small-diameter, high-strength
              piles ideal for tight or constrained spaces where traditional
              piling cannot be used.
              <br />
              <strong>Grouting</strong> involves injecting cementitious or
              chemical materials to fill voids, reduce permeability, and enhance
              soil bearing capacity.
            </p>

            <p>
              These solutions are perfect for underpinning existing structures,
              stabilizing slopes, and supporting new developments.
              <br />
              We work closely with engineers to design systems that meet your
              site’s geotechnical requirements, delivering long-term stability
              and performance.
            </p>

            <p>
              Choosing <strong>Keene Krib</strong> for micropile and grouting
              projects ensures expert installation, durable results, and
              confidence in the safety of your structures.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Micropile & Grouting Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img src="/img/icons/piling-drilling.svg" alt="Micropiles Icon" />
              Micropiles – high-strength small-diameter piles for constrained
              spaces
            </li>
            <li>
              <img src="/img/icons/anchors.svg" alt="Grouting Icon" />
              Injection Grouting – fills voids and improves soil bearing
              capacity
            </li>
            <li>
              <img
                src="/img/icons/concrete-walls.svg"
                alt="Ground Stabilization Icon"
              />
              Ground Stabilization – underpinning and slope support for
              long-term stability
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

export default MicropilesGrouting;
