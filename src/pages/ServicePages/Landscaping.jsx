import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

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
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of landscaping work by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we offer comprehensive landscaping
            services designed to enhance and complement your outdoor spaces.<br />
            Our expertise includes site clearing, excavation, concreting,
            fencing, timber decking, and more.<br />
            <br />
            Whether you’re preparing a site for a new retaining wall or looking
            to finish your project with beautiful and functional landscaping,
            our skilled team delivers quality results tailored to your vision.<br />
            <br />
            We work closely with you to understand your needs, site conditions,
            and budget to provide practical and creative landscaping solutions.<br />
            <br />
            From residential gardens to commercial developments, Keene Krib
            brings craftsmanship and professionalism to every project.<br />
            <br />
            Trust us to transform your landscape into a safe, attractive, and
            enjoyable environment.<br />
            Contact us today to discuss your landscaping needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landscaping;
