import React from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2>Projects</h2>
      <p className="desc">
        Dive into my projects! From interactive web apps to user-friendly
        designs, each one reflects my passion for ReactJS and frontend
        development. Check them out and see how I blend creativity with
        technical know-how to bring ideas to life.
      </p>
      <div className="projects-container">
        {projectsData.map(
          ({ id, projectName, img, desc, activeLink, repoLink }, index) => (
            <ProjectCard
              id={id}
              projectName={projectName}
              img={img}
              desc={desc}
              activeLink={activeLink}
              repoLink={repoLink}
              index={index}
            />
          )
        )}
      </div>
      <Link to="/projects">
        <button className="white-btn">See more</button>
      </Link>
    </div>
  );
};

export default Projects;
