import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

const RetainingWalls = () => {
  return (
    <>
      <Seo
        title="Retaining Walls | Keene Krib"
        description="Custom timber, concrete, and stone retaining wall solutions across Wellington."
        url="https://keenekrib.co.nz/services/retaining-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Retaining Walls"
        heading={
          <>
            Retaining <span className="highlight">Walls</span>
          </>
        }
        description="We build structural retaining walls designed to hold back soil and
            shape your land for safety and usability."
        showButtons={false}
        small={true}
      />
      <div className="body">
        <div className="split-container">
          <h2>ILL PUT AN IMAGE HERE</h2>
          <p className="service-paragraph">
            At <strong>Keene Krib</strong>, we specialise in designing and
            constructing retaining walls that are both{" "}
            <strong>structurally sound</strong> and{" "}
            <strong>aesthetically pleasing</strong>.<br />
            With over 40 years of experience across Wellington’s diverse
            terrain, we’ve mastered the art of creating walls that hold back
            more than just soil — they{" "}
            <strong>
              shape safe, functional, and beautiful outdoor spaces
            </strong>
            .<br />
            <br />
            Whether you need to <strong>stabilise a sloped section</strong>,
            create <strong>flat areas for landscaping or building</strong>, or
            address issues with <strong>erosion and drainage</strong>, our team
            can deliver a solution that fits your land and budget.
            <br />
            We work with a wide range of materials including{" "}
            <strong>
              timber, concrete, crib blocks, stone, and segmental retaining
              systems
            </strong>
            , carefully selecting the right approach based on engineering
            requirements and the surrounding environment.
            <br />
            <br />
            Our retaining walls are custom-built to meet the{" "}
            <strong>specific demands of your site</strong>, with careful
            attention paid to{" "}
            <strong>
              earth pressure, water flow, and structural longevity
            </strong>
            .<br />
            We also ensure every wall we build complies with local regulations
            and best-practice construction standards.
            <br />
            <br />
            From <strong>residential garden walls</strong> to{" "}
            <strong>large-scale civil or subdivision projects</strong>, we bring
            expert knowledge, top-quality workmanship, and a reputation for
            delivering results that stand the test of time.
            <br />
            We also offer <strong>repairs and reinforcement</strong> for damaged
            or failing retaining structures.
            <br />
            <br />
            Trust Keene Krib to hold the ground — and your project — with
            strength, care, and confidence.
          </p>
        </div>
      </div>
    </>
  );
};

export default RetainingWalls;
