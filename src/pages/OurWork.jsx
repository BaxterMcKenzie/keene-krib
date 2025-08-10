import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";

const projects = [
  {
    id: 1,
    title: "Residential Retaining Wall",
    description: `A beautifully crafted timber retaining wall stabilising a steep backyard slope. This project improved both safety and curb appeal.`,
    image: "/img/our-work/retaining-wall-1.jpg",
  },
  {
    id: 2,
    title: "Commercial Piling Installation",
    description: `Heavy-duty concrete piling installation for a commercial development in Wellington's CBD.`,
    image: "/img/our-work/piling-1.jpg",
  },
  {
    id: 3,
    title: "Landscaping & Decking",
    description: `Complete landscaping makeover with timber decking, fencing, and garden bed installation.`,
    image: "/img/our-work/landscaping-1.jpg",
  },
  // add as many projects as you like
];

const OurWork = () => {
  return (
    <>
      <Seo
        title="Our Work | Keene Krib"
        description="Showcasing our retaining walls, piling, landscaping, and more completed across Wellington."
        url="https://keenekrib.co.nz/our-work"
        image="/img/assets/our-work-hero.jpg"
      />
      <div className="body">
        <HeroCarousel
          image="/img/assets/our-work-hero.jpg"
          alt="Keene Krib completed projects"
          heading={
            <>
              Our <span className="highlight">Work</span>
            </>
          }
          description="Explore some of the projects we're proud to have completed for clients across Wellington and beyond."
          showButtons={false}
          small={true}
        />

        {projects.map((project) => (
          <div className="split-container" key={project.id}>
            <img
              className="split-container-img"
              src={project.image}
              alt={project.title}
            />
            <div className="split-container-p">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurWork;
