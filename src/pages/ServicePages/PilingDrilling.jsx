import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

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
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of piling and drilling work by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we specialise in professional piling and drilling solutions that provide solid foundations for your structures.<br />
            Whether for residential or commercial projects, we use timber, concrete, or steel piles designed to support varying loads and ground conditions.<br />
            <br />
            Our team is experienced in working with complex site conditions to ensure safety, compliance, and long-term durability.<br />
            We carefully assess soil types, load requirements, and project specifics to recommend the best piling and drilling method.<br />
            <br />
            From initial planning to precise installation, Keene Krib delivers reliable, engineered solutions tailored to your needs.<br />
            Trust us to provide foundational support that ensures the stability and success of your build.<br />
          </p>
        </div>
      </div>
    </>
  );
};

export default PilingDrilling;
