import React from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";

const Services = () => {
  return (
    <>
      <Seo
        title="Our Services | Keene Krib"
        description="Discover the full range of retaining wall, piling, and landscaping services offered by Keene Krib in Wellington."
        url="https://keenekrib.co.nz/services"
        image="https://keenekrib.co.nz/img/assets/services-hero.jpg"
      />
      <div className="body">
        <HeroCarousel
          image="/img/assets/our-services.jpg"
          alt="Keene Krib Services"
          heading={
            <>
              Our <span className="highlight">Services</span>
            </>
          }
          description="We provide expert retaining wall, piling, and landscaping solutions tailored to your project."
          showButtons={false}
        />

        <div className="container">
          <h2>SERVICES</h2>
          <div className="services-grid">
            {[
              {
                title: "Retaining Walls",
                path: "/services/retaining-walls",
                content: `We design and construct a wide range of retaining walls tailored to suit your landscape and soil conditions. Whether it's timber, concrete, or natural stone, our retaining walls are built to last and engineered to prevent erosion, manage water flow, and stabilise sloped terrain.`
              },
              {
                title: "Pole Walls",
                path: "/services/pole-walls",
                content: `Ideal for steep gradients, our pole walls use treated timber or steel posts and reinforced earth techniques. These systems can reach heights of 6m, making them perfect for hillside and subdivision projects.`
              },
              {
                title: "Block Walls",
                path: "/services/block-walls",
                content: `Our segmental block walls combine strength with clean aesthetics. Reinforced with geogrid, these walls are perfect for residential gardens, commercial developments, and multi-level landscaping.`
              },
              {
                title: "Concrete Walls",
                path: "/services/concrete-walls",
                content: `From shotcrete to poured-in-place, our concrete wall systems are engineered for strength and durability. Ideal for large-scale commercial or infrastructure projects.`
              },
              {
                title: "Wall Repairs",
                path: "/services/wall-repairs",
                content: `We repair leaning, cracked, or failing walls using cost-effective, engineered solutions that restore safety and longevity without full replacement.`
              },
              {
                title: "Landscaping",
                path: "/services/landscaping",
                content: `Complement your retaining project with professional landscaping — including site clearing, excavation, concreting, fencing, and decking.`
              },
              {
                title: "Piling & Drilling",
                path: "/services/piling-drilling",
                content: `We provide piling and drilling using timber, concrete, or steel for stable foundations. Suitable for both residential and commercial needs.`
              },
              {
                title: "Anchors",
                path: "/services/anchors",
                content: `We install ground anchors (tension, passive, or pile) for walls, slopes, and unstable sites, all engineered to your site's specific load requirements.`
              },
              {
                title: "Micropiles & Grouting",
                path: "/services/micropiles-grouting",
                content: `Used in constrained or poor soil conditions, our micropiles and grouting solutions stabilize structures and improve ground integrity.`
              }
            ].map((service, index) => (
              <div className="service-item" key={index}>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
                <Link to={service.path} className="primary-button" style={{ marginTop: "1rem", display: "inline-block" }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
