import React from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import portfolio1 from "../../assets/portfolio-1.png"
import project1Img from "../../assets/Projects/project1.png";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2>Projects</h2>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="projects-container">
        <ProjectCard img={project1Img} />
      </div>
      <button className="white-btn">See more</button>
    </div>
  );
};

export default Projects;
