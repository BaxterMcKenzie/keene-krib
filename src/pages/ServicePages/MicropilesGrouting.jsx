import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

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
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of micropiles and grouting by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we offer specialist micropiling and injection grouting services to strengthen foundations and stabilize ground in difficult or constrained soil conditions.<br />
            Micropiles are small-diameter, high-strength piles that can be installed in tight spaces where traditional piling is not feasible.<br />
            <br />
            Our grouting techniques involve injecting cementitious or chemical materials into the ground to fill voids, reduce permeability, and improve soil bearing capacity.<br />
            These advanced solutions are ideal for underpinning existing structures, stabilizing slopes, and supporting new developments.<br />
            <br />
            We work closely with engineers to tailor micropile and grouting systems specific to your project’s geotechnical requirements.<br />
            Trust Keene Krib for ground improvement solutions that deliver strength, stability, and long-term performance.<br />
          </p>
        </div>
      </div>
    </>
  );
};

export default MicropilesGrouting;
