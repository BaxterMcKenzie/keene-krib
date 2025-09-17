import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo"; // make sure this path matches your folder structure
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Seo
        title="Keene Krib — Wellington Retaining Wall & Piling Experts"
        description="Keene Krib is a family-owned Wellington business specialising in retaining walls, pole walls, piling, anchoring, and landscaping solutions."
        url="https://keenekrib.co.nz" // update with your actual domain
        image="https://keenekrib.co.nz/img/assets/workers.jpg" // update with your preferred social share image
      />
      <div className="body">
        <HeroCarousel />
        <div className="container services-container">
          <h2>SERVICES</h2>
          <div className="services-grid">
            <Link to="/services/retaining-walls" className="service-item">
              <h3>
                Retaining Walls
                <img
                  src="/img/icons/retaining-wall.svg"
                  alt="Retaining Wall Icon"
                />
              </h3>
              <p>Specialists in all types of retaining wall solutions.</p>
            </Link>

            <Link to="/services/pole-walls" className="service-item">
              <h3>
                Pole Walls
                <img src="/img/icons/pole-walls.svg" alt="Pole Walls Icon" />
              </h3>
              <p>Up to 6m high using reinforced earth techniques.</p>
            </Link>

            <Link to="/services/block-walls" className="service-item">
              <h3>
                Crib Walls
                <img src="/img/icons/block-walls.svg" alt="Block Walls Icon" />
              </h3>
              <p>Segmental block systems using earth reinforcement.</p>
            </Link>

            <Link to="/services/concrete-walls" className="service-item">
              <h3>
                Concrete Walls
                <img
                  src="/img/icons/concrete-walls.svg"
                  alt="Concrete Walls Icon"
                />
              </h3>
              <p>Sprayed concrete with anchors for added stability.</p>
            </Link>

            <Link to="/services/wall-repairs" className="service-item">
              <h3>
                Wall Repairs
                <img
                  src="/img/icons/wall-repairs.svg"
                  alt="Wall Repairs Icon"
                />
              </h3>
              <p>Repairs for failed or damaged retaining structures.</p>
            </Link>

            <Link to="/services/landscaping" className="service-item">
              <h3>
                Landscaping
                <img src="/img/icons/landscaping.svg" alt="Landscaping Icon" />
              </h3>
              <p>Excavation, concreting, timber decking, and fencing.</p>
            </Link>

            <Link to="/services/piling-drilling" className="service-item">
              <h3>
                Piling & Drilling
                <img
                  src="/img/icons/piling-drilling.svg"
                  alt="Piling and Drilling Icon"
                />
              </h3>
              <p>Commercial & domestic piling in concrete or timber.</p>
            </Link>

            <Link to="/services/anchors" className="service-item">
              <h3>
                Anchors
                <img src="/img/icons/anchors.svg" alt="Anchors Icon" />
              </h3>
              <p>Tension, passive & pile anchors for all depths and loads.</p>
            </Link>

            <Link to="/services/micropiles-grouting" className="service-item">
              <h3>
                Micropiles & Grouting
                <img
                  src="/img/icons/micropiles.svg"
                  alt="Micropiles and Grouting Icon"
                />
              </h3>
              <p>ABV micropiles, augured holes, and injection grouting.</p>
            </Link>
          </div>
        </div>

        <h2>OUR WORK</h2>
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/our-work/wood-pole-4.jpg"
            alt="Keene Krib team working on a retaining wall project in Wellington"
          />
          <div className="split-container-p">
            <h3>Trusted Projects Across Wellington</h3>
            <p>
              From residential gardens to large-scale commercial developments,
              Keene Krib brings decades of local experience to every project.
              Our team is skilled in retaining walls, landscaping, piling, and
              more.
            </p>
            <p>
              We take pride in delivering quality, reliable, and safe solutions
              tailored to each site’s unique challenges.
            </p>
            <p>
              Take a look at some of the projects we've completed for clients
              across Wellington and see the care and craftsmanship we bring to
              every job.
            </p>
            <Link to="/our-work" className="primary-button">
              View Our Work
            </Link>
          </div>
        </div>

        <div className="divider"></div>

        <h2>ABOUT US</h2>
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/workers.jpg"
            alt="Keene Krib team working on a retaining wall project in Wellington"
          />
          <div className="split-container-p">
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
    </>
  );
};

export default Home;
