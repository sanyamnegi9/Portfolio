import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  projectName,
  desc,
  skills,
  img,
  activeLink,
  repoLink,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`project-container ${isEven ? "even-img" : "odd-img"}`}
      key={id}
    >
      <img src={img} alt="project" className="project-img" />
      <div className="project-details">
        <h3 className="project-title">{projectName}</h3>
        <p className="project-desc ">{desc}</p>
        <p className="project-skills">{skills}</p>
        <div className="project-links">
          <Link to={repoLink}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          <Link to={activeLink}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
