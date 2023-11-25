import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({img, link}) => {
  return (
    <div className="project-container">
      <img src={img} alt="project" className='project-img'/>
      <div className='project-details'>

      </div>
    </div>
  );
}

export default ProjectCard