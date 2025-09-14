import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";
import { Link } from "react-router-dom";
import OtherServicesDropdown from "../../components/OtherServicesDropdown";

const Landscaping = () => {
  return (
    <>
      <Seo
        title="Landscaping | Keene Krib"
        description="Professional landscaping services including site clearing, excavation, concreting, fencing, and decking across Wellington."
        url="https://keenekrib.co.nz/services/landscaping"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Landscaping"
        heading={
          <>
            <span className="highlight">Landscaping</span>
          </>
        }
        description="Complement your retaining wall project with expert landscaping services tailored to your needs."
        showButtons={false}
        small={true}
      />

      <OtherServicesDropdown />

      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/our-work/wood-pole-4.jpg"
            alt="Example of landscaping work by Keene Krib"
          />

          <div className="split-container-p">
            <h3 className="split-container-h3">About Landscaping</h3>

            <p>
              At <strong>Keene Krib</strong>, we provide comprehensive
              landscaping services designed to enhance and complement your
              outdoor spaces.
              <br />
              Our expertise includes site clearing, excavation, concreting,
              fencing, timber decking, and more.
            </p>

            <p>
              We work closely with clients to understand site conditions,
              vision, and budget, delivering practical and creative landscaping
              solutions.
              <br />
              From residential gardens to commercial developments, our team
              ensures every project is functional, safe, and visually appealing.
            </p>

            <p>
              Whether preparing a site for a retaining wall or finishing your
              project with beautiful landscaping, <strong>Keene Krib</strong>{" "}
              provides craftsmanship and professionalism every step of the way.
            </p>
          </div>
        </div>

        <div className="single-service-key">
          <h4 className="features-title">Key Landscaping Services:</h4>
          <ul className="service-features-grid">
            <li>
              <img src="/img/icons/landscaping.svg" alt="Landscaping Icon" />
              Site Clearing & Excavation – preparing your space for walls or
              gardens
            </li>
            <li>
              <img src="/img/icons/concrete-walls.svg" alt="Concreting Icon" />
              Concreting – pathways, slabs, and foundations for durability
            </li>
            <li>
              <img
                src="/img/icons/pole-walls.svg"
                alt="Fencing & Decking Icon"
              />
              Fencing & Decking – timber features that complement your landscape
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

export default Landscaping;
