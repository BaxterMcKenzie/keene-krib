import React, { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";
import ProjectDropdown from "../components/ProjectDropdown";

const projects = [
  {
    id: 1,
    title: "House Hanging off the Hill",
    description: [
      "The house was literally hanging off the hill, creating a challenging retaining wall repair project.",
      "The Keene Krib team used their expertise in retaining wall construction and soil stabilization to safely repair a major slip.",
      "A huge effort with an outstanding result – a safe, stable, and visually restored property in Wellington.",
    ],
    images: [
      "/img/our-work/hanging-house-1.jpg",
      "/img/our-work/hanging-house-2.jpg",
      "/img/our-work/hanging-house-3.jpg",
      "/img/our-work/hanging-house-4.jpg",
    ],
  },
  {
    id: 2,
    title: "WCC Access Path Retaining Wall",
    description: [
      "The Keene Krib team transformed an old, run-down access pathway for the Wellington City Council into a safe and welcoming space.",
      "They repaired the retaining wall, resealed the path, installed a sturdy new fence, added proper drainage, and cleaned up the area.",
      "The result is a functional, safe, and visually improved access way for the community to enjoy.",
    ],
    images: [
      "/img/our-work/access-path-4.jpg",
      "/img/our-work/access-path-2.jpg",
      "/img/our-work/access-path-3.jpg",
      "/img/our-work/access-path-1.jpg",
      "/img/our-work/access-path-5.jpg",
    ],
  },
  {
    id: 3,
    title: "Wooden Pole Retaining Wall & Landscaping",
    description: [
      "The Keene Krib team replaced an old concrete retaining wall with a beautifully crafted timber pole wall in Wellington.",
      "They also upgraded the surrounding area with grass and timber surrounds, enhancing both functionality and visual appeal.",
      "This project demonstrates high-quality retaining wall solutions for tight-access residential sites.",
    ],
    images: [
      "/img/our-work/wood-pole-4.jpg",
      "/img/our-work/wood-pole-1.jpg",
      "/img/our-work/wood-pole-2.jpg",
      "/img/our-work/wood-pole-3.jpg",
    ],
  },
  {
    id: 4,
    title: "Timber Retaining Wall & Landscaping",
    description: [
      "Completed just in time for summer, this project involved building a beautiful wooden retaining wall with a matching fence and custom stairs.",
      "The Keene Krib team enhanced the outdoor space with landscaping solutions, creating a safe, attractive, and functional area.",
      "This project highlights our expertise in retaining walls, timber work, and residential landscaping in Wellington.",
    ],
    images: [
      "/img/our-work/wooden-krib-1.jpg",
      "/img/our-work/wooden-krib-2.jpg",
      "/img/our-work/wooden-krib-3.jpg",
      "/img/our-work/wooden-krib-4.jpg",
      "/img/our-work/wooden-krib-5.jpg",
    ],
  },
];

const OurWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);

  const openModal = (images, index) => {
    setCurrentProjectImages(images);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProjectImages([]);
    setCurrentImageIndex(0);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (currentImageIndex - 1 + currentProjectImages.length) %
        currentProjectImages.length
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((currentImageIndex + 1) % currentProjectImages.length);
  };

  return (
    <>
      <Seo
        title="Our Work | Keene Krib"
        description="Showcasing our retaining walls, piling, landscaping, and more completed across Wellington."
        url="https://keenekrib.co.nz/our-work"
        image="/img/assets/keene-krib-our-work.jpg"
      />
      <div className="body">
        <HeroCarousel
          image="/img/assets/keene-krib-our-work.jpg"
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

        <ProjectDropdown projects={projects} />

        {projects.map((project, idx) => {
          const [mainImage, ...otherImages] = project.images;

          return (
            <React.Fragment key={project.id}>
              <div className="split-container" id={`project-${project.id}`}>
                <img
                  className="split-container-img"
                  src={mainImage}
                  alt={project.title}
                  onClick={() => openModal(project.images, 0)}
                  style={{ cursor: "pointer" }}
                />
                <div className="split-container-p">
                  <h3>{project.title}</h3>
                  {project.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {otherImages.length > 0 && (
                    <div className="image-grid">
                      {otherImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title} ${i + 2}`}
                          onClick={() => openModal(project.images, i + 1)}
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {idx < projects.length - 1 && <div className="divider" />}
            </React.Fragment>
          );
        })}

        {modalOpen && (
          <div className="modal-img" onClick={closeModal}>
            <div
              className="modal-img-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="close-img" onClick={closeModal}>
                &times;
              </span>

              <img
                src={currentProjectImages[currentImageIndex]}
                alt="Project"
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  borderRadius: "8px",
                }}
              />

              {currentProjectImages.length > 1 && (
                <>
                  <button className="modal-arrow-img left" onClick={prevImage}>
                    &#10094;
                  </button>
                  <button className="modal-arrow-img right" onClick={nextImage}>
                    &#10095;
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
.modal-img {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-img-content {
  background-color: #1d1d1d;
  border-radius: 12px;
  text-align: center;
  position: relative;
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal-img-content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.close-img {
  color: #f04d4c;
  font-size: 36px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 10;
}

.modal-arrow-img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: #f1b649;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  z-index: 10;
}

.modal-arrow-img.left {
  left: 10px;
}

.modal-arrow-img.right {
  right: 10px;
}

.modal-arrow-img:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .modal-img-content {
    width: 95vw;
    height: 95vw; 
  }
}

`}</style>
    </>
  );
};

export default OurWork;
