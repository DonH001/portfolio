import React, { useState } from "react";
import erp1 from "../assets/projects/erp.png";
// import thesis1 from "../assets/projects/.png";
// import thesis2 from "../assets/projects/.png";
import crudcake1 from "../assets/projects/cruds.png";
import crudcake2 from "../assets/projects/cruds_dashboard.png";
import crudcakethree from "../assets/projects/crud_users.png";
import crudcakefour from "../assets/projects/crud_status.png";
import umapit1 from "../assets/projects/umap1.png";
import umapit2 from "../assets/projects/umap2.png";
import umapitthree from "../assets/projects/umapthree.png";
import umapitfour from "../assets/projects/umapfour.png";

const projects = [
  {
    name: "ERP-System",
    tech: "Java, HTML, Oracle Database",
    description:
      "A comprehensive Enterprise Resource Planning application built using Spring Boot and Oracle Database. This system is designed to streamline and automate various business processes.",
    screenshots: [erp1],
  },
//   {
//     name: "Thesis Project",
//     tech: "Python, C++",
//     description:
//       "A sophisticated system for tracking and identifying individuals across multiple CCTV cameras using a combination of YoloV8 and YuNet Fast-RCNN algorithms.",
//     screenshots: [ ],
//   },
  {
    name: "Crud-CakePHP",
    tech: "CakePHP, AngularJS, Bootstrap",
    description:
      "A web-based CRUD management system built with CakePHP, AngularJS, and Bootstrap. Features include user management, CRUD operations, status tracking, file uploads, and interactive dashboards with charts.",
    screenshots: [crudcake1, crudcake2, crudcakethree, crudcakefour ],
  },
  {
    name: "Umapit",
    tech: "WordPress, JavaScript, HTML, CSS",
    description:
      "Umapitis your interactive, step-by-step guide to mastering u-substitution in integral calculus. Think of it as a math GPS—helping you plan your route, make decisions, and avoid wrong turns along the way. Visit: https://umapit.it.com/",
    screenshots: [umapit1, umapit2, umapitthree, umapitfour],
  },
];

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setImgIdx(0);
  };
  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setImgIdx(0);
  };

  const prevImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setImgIdx((prev) =>
      prev === 0 ? projects[current].screenshots.length - 1 : prev - 1
    );
  };
  const nextImg = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setImgIdx((prev) =>
      prev === projects[current].screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const project = projects[current];

  // Lightbox keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line
  }, [lightboxOpen, imgIdx, current]);

  return (
    <section id="projects" className="section">
      <h2>Personal Projects</h2>
      <div className="project-slider">
        <button
          className="project-arrow"
          onClick={prevProject}
          aria-label="Previous project"
        >
          &#8592;
        </button>
        <div className="project-card">
          <div className="project-img-slider">
            <button
              className="img-arrow"
              onClick={prevImg}
              aria-label="Previous screenshot"
            >
              &#8592;
            </button>
            <img
              src={project.screenshots[imgIdx]}
              alt={`${project.name} screenshot ${imgIdx + 1}`}
              className="project-img"
              style={{ cursor: "zoom-in" }}
              onClick={() => setLightboxOpen(true)}
            />
            <button
              className="img-arrow"
              onClick={nextImg}
              aria-label="Next screenshot"
            >
              &#8594;
            </button>
          </div>
          <div>
            <h3>{project.name}</h3>
            <p>
              <strong>Tech:</strong> {project.tech}
              <br />
              {project.description}
            </p>
          </div>
        </div>
        <button
          className="project-arrow"
          onClick={nextProject}
          aria-label="Next project"
        >
          &#8594;
        </button>
      </div>
      <div className="project-dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={`project-dot${idx === current ? " active" : ""}`}
            onClick={() => {
              setCurrent(idx);
              setImgIdx(0);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <span className="lightbox-close" onClick={() => setLightboxOpen(false)}>
            &times;
          </span>
          <button
            className="lightbox-arrow left"
            onClick={prevImg}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <img
            src={project.screenshots[imgIdx]}
            alt={`${project.name} screenshot ${imgIdx + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-arrow right"
            onClick={nextImg}
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;