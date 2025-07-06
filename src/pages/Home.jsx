import React from "react";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  return (
    <>
      <div className="body">
        <HeroCarousel />
        <div className="container">
          
          <h2>SERVICES</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Retaining Walls</h3>
              <p>Specialists in all types of retaining wall solutions.</p>
            </div>
            <div className="service-item">
              <h3>Pole Walls</h3>
              <p>Up to 6m high using reinforced earth techniques.</p>
            </div>
            <div className="service-item">
              <h3>Block Walls</h3>
              <p>Segmental block systems using earth reinforcement.</p>
            </div>
            <div className="service-item">
              <h3>Concrete Walls</h3>
              <p>Sprayed concrete with anchors for added stability.</p>
            </div>
            <div className="service-item">
              <h3>Wall Repairs</h3>
              <p>Repairs for failed or damaged retaining structures.</p>
            </div>
            <div className="service-item">
              <h3>Landscaping</h3>
              <p>Excavation, concreting, timber decking, and fencing.</p>
            </div>
            <div className="service-item">
              <h3>Piling & Drilling</h3>
              <p>Commercial & domestic piling in concrete or timber.</p>
            </div>
            <div className="service-item">
              <h3>Anchors</h3>
              <p>Tension, passive & pile anchors for all depths and loads.</p>
            </div>
            <div className="service-item">
              <h3>Micropiles & Grouting</h3>
              <p>ABV micropiles, augured holes, and injection grouting.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>ABOUT US</h2>
          <div className="split-container">
            <img className="about-us-img" src="/img/assets/workers.jpg" alt="keene krib works" />
            <div className="about-us">
            <h3>Over 160 Years of combined Local Experience</h3>
            <p>
              Keene Krib is a family-owned and operated business based in
              Brooklyn, Wellington. We've proudly served Wellington and the
              wider region for over three decades, building a strong reputation
              for quality, reliability, and integrity.
            </p>
            <p>
              With a broad range of equipment and a dedicated, highly skilled
              team, we’re equipped to take on everything from tricky hillside
              jobs to large commercial projects. No job is too big or too small
              — we tackle each one with the same care and commitment.
            </p>
            <p>
              As a family business, we value people. We take pride in looking
              after our workers, many of whom have been with us for years. We
              believe in fair pricing, honest work, and doing what we say we’ll
              do — on time, every time.
            </p>
            <p>
              Need help with your project? Send your plans and details to
              <a href="mailto:qs@keenekrib.co.nz"> qs@keenekrib.co.nz</a> for a
              free quote. We’re always happy to help.
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
