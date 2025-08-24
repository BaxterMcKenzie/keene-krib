import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";

const projects = [
  {
    id: 1,
    title: "The House Hanging off the Hill",
    description: `The house was literally hanging off the hill. Every now and then, a project comes along that really puts your skills and experience to the test. This was one of those jobs. The Keene Krib team stepped up to the challenge, using their expertise to safely repair a major slip and secure the property. A huge effort and a great result — awesome work team!`,
    images: [
      "/img/our-work/hanging-house-1.jpg",
      "/img/our-work/hanging-house-2.jpg",
      "/img/our-work/hanging-house-3.jpg",
      "/img/our-work/hanging-house-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Commercial Piling Installation",
    description: `Heavy-duty concrete piling installation for a commercial development in Wellington's CBD.`,
    images: [
      "/img/our-work/piling-1.jpg",
      "/img/our-work/piling-2.jpg",
      "/img/our-work/piling-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Landscaping & Decking",
    description: `Complete landscaping makeover with timber decking, fencing, and garden bed installation.`,
    images: [
      "/img/our-work/landscaping-1.jpg",
      "/img/our-work/landscaping-2.jpg",
    ],
  },
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

        {projects.map((project) => {
          const [mainImage, ...otherImages] = project.images; // destructure first image

          return (
            <div className="split-container" key={project.id}>
              <img
                className="split-container-img"
                src={mainImage}
                alt={project.title}
              />
              <div className="split-container-p">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {otherImages.length > 0 && (
                  <div className="image-grid">
                    {otherImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.title} ${idx + 2}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurWork;
