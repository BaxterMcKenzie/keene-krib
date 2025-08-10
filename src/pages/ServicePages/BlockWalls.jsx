import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

const BlockWalls = () => {
  return (
    <>
      <Seo
        title="Block Walls | Keene Krib"
        description="Durable segmental block walls reinforced with geogrid, perfect for residential gardens and commercial landscaping across Wellington."
        url="https://keenekrib.co.nz/services/block-walls"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Block Walls"
        heading={
          <>
            Block <span className="highlight">Walls</span>
          </>
        }
        description="Our segmental block walls are engineered for strength and aesthetic appeal, reinforced with geogrid for extra stability."
        showButtons={false}
        small={true}
      />
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of a block wall built by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we specialise in constructing
            segmental block walls that combine durability with clean,
            professional aesthetics.<br />
            These walls are reinforced with geogrid to ensure superior
            stability and long-lasting performance, making them ideal for
            residential gardens, commercial developments, and multi-level
            landscaping projects.<br />
            <br />
            With decades of experience in Wellington’s unique terrain, we know
            how to design block walls that manage earth pressures and blend
            beautifully with their surroundings.<br />
            Whether you need a decorative retaining feature or a robust
            structural wall, our team will tailor a solution to fit your site
            and budget.<br />
            <br />
            We use high-quality materials and proven engineering techniques to
            ensure every block wall stands the test of time.<br />
            Our craftsmanship and attention to detail make Keene Krib a trusted
            partner for landscaping and retaining wall projects.<br />
            <br />
            Contact us to learn how our block walls can add strength and style
            to your property.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlockWalls;
