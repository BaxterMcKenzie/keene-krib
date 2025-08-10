import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

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
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of a pole wall built by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we specialise in engineering pole walls
            that tackle challenging slopes and steep terrain.<br />
            Our pole walls are constructed with treated timber or steel posts,
            reinforced with earth retention methods to ensure strength and
            stability.<br />
            <br />
            With decades of experience working across Wellington’s varied
            landscapes, we understand the importance of creating walls that
            maintain <strong>structural integrity</strong> even under difficult
            environmental conditions.<br />
            Whether you need to stabilise a hillside for a new subdivision or
            secure a steep residential property, our team delivers reliable,
            compliant solutions tailored to your site.<br />
            <br />
            We carefully select materials and installation techniques to match
            the specific challenges of your terrain, soil type, and load
            requirements.<br />
            Our pole walls are engineered to provide long-lasting support while
            blending naturally into the landscape.<br />
            <br />
            From planning through to construction and maintenance, Keene Krib
            provides expert craftsmanship and professional service.<br />
            Trust us to build pole walls that protect your property and add value
            to your site.
          </p>
        </div>
      </div>
    </>
  );
};

export default PoleWalls;
