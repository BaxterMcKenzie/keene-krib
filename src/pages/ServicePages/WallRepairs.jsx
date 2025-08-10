import React from "react";
import Seo from "../../components/Seo";
import HeroCarousel from "../../components/HeroCarousel";

const WallRepairs = () => {
  return (
    <>
      <Seo
        title="Wall Repairs | Keene Krib"
        description="Professional retaining wall repair services to restore structural integrity and safety for damaged or failing walls across Wellington."
        url="https://keenekrib.co.nz/services/wall-repairs"
      />
      <HeroCarousel
        image="/img/assets/service-head-2.jpg"
        alt="Wall Repairs"
        heading={
          <>
            Wall <span className="highlight">Repairs</span>
          </>
        }
        description="We provide expert repair and reinforcement solutions for retaining walls that are cracked, leaning, or failing."
        showButtons={false}
        small={true}
      />
      <div className="body">
        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/retaining-wall.jpg"
            alt="Example of a retaining wall repair by Keene Krib"
          />
          <p className="split-container-p">
            At <strong>Keene Krib</strong>, we specialise in repairing
            retaining walls that have suffered damage or structural failure.<br />
            Our team assesses each wall carefully to diagnose issues such as
            cracking, leaning, or soil movement.<br />
            <br />
            Using engineered, cost-effective solutions, we reinforce and
            stabilise walls to restore safety and extend their lifespan without
            full replacement.<br />
            We work with a variety of wall types including timber, concrete,
            block, and stone.<br />
            <br />
            Whether it’s a minor repair or a complex reinforcement project, we
            tailor our approach to your specific needs and site conditions.<br />
            <br />
            Trust Keene Krib to bring your retaining walls back to full
            functionality with quality workmanship and professional service.<br />
            We ensure repairs comply with local regulations and construction
            best practices.<br />
            <br />
            Contact us today to schedule an inspection or discuss your wall
            repair needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default WallRepairs;
