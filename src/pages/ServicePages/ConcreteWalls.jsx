import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

const ConcreteWalls = () => {
  return (
    <>
      <Seo
        title="Concrete Walls | Keene Krib"
        description="Engineered concrete wall solutions including shotcrete and poured-in-place walls for commercial and residential projects across Wellington."
        url="https://keenekrib.co.nz/services/concrete-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Concrete Walls"
        heading={
          <>
            Concrete <span className="highlight">Walls</span>
          </>
        }
        description="We provide engineered concrete wall systems designed for strength, durability, and longevity on any scale."
        showButtons={false}
        small={true}
      />
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of a concrete wall built by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we specialise in concrete retaining
            wall systems tailored to your project’s scale and requirements.<br />
            Our offerings include shotcrete, poured-in-place concrete, and
            reinforced concrete walls engineered for maximum strength and
            durability.<br />
            <br />
            Whether you’re managing large commercial sites, infrastructure
            projects, or residential developments, we provide solutions that
            withstand Wellington’s unique environmental challenges.<br />
            Our team carefully plans and constructs walls to ensure proper
            load-bearing capacity, drainage, and long-term structural
            integrity.<br />
            <br />
            We use quality materials and industry best practices to guarantee
            each concrete wall meets or exceeds local building codes and
            standards.<br />
            Trust Keene Krib for professional craftsmanship and reliable
            concrete retaining solutions that stand the test of time.<br />
            <br />
            Contact us to discuss your concrete wall project and how we can
            deliver strength, safety, and aesthetic appeal.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConcreteWalls;
