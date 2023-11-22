import React from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import portfolio1 from "../../assets/portfolio-1.png"
import portfolio2 from "../../assets/portfolio-2.png"
import portfolio3 from "../../assets/portfolio-3.png"
import portfolio4 from "../../assets/portfolio-4.png"
import portfolio5 from "../../assets/portfolio-5.png"
import portfolio6 from "../../assets/portfolio-6.png"

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="project-title">Projects</h2>
      <p className="project-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi,
        sed libero nisi deleniti mollitia at neque aliquid consequatur assumenda
        autem nobis ut dolores error, amet soluta inventore velit, omnis ratione
        eveniet! Nisi voluptate vitae, beatae sequi numquam quibusdam possimus
        soluta aut porro veniam quaerat quod! Sequi neque et fugiat!
      </p>
      <div className="projects-container">
        <ProjectCard img={portfolio1} link={"/project1"} />
        <ProjectCard img={portfolio2} link={"/"} />
        <ProjectCard img={portfolio3} link={"/"} />
        <ProjectCard img={portfolio4} link={"/"} />
        <ProjectCard img={portfolio5} link={"/"} />
        <ProjectCard img={portfolio6} link={"/"} />
      </div>
      <button className="more-btn">See more</button>
    </div>
  );
};

export default Projects;
