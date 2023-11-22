import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({img, link}) => {
  return (
    <Link to={link}>
      <img src={img} alt="projectImage" className="product-img" />
    </Link>
  );
}

export default ProjectCard