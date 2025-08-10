import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

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
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of anchors installed by Keene Krib"
          />
          <p className="split-container-p">
            <h3 className="split-container-h3">About Anchors</h3>
            At <strong>Keene Krib</strong>, we specialize in the professional installation of ground anchors to secure retaining walls, slopes, and unstable terrain.<br />
            Our expertise covers tension anchors, passive anchors, and pile anchors engineered to withstand specific load and site requirements.<br />
            <br />
            We work closely with engineers and surveyors to design anchor systems that maximize stability and safety while meeting local regulations.<br />
            Whether your project requires reinforcement of existing structures or new installations, our team delivers reliable solutions.<br />
            <br />
            Trust Keene Krib for anchor installations that provide durable support and peace of mind for your property and landscape.<br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Anchors;
