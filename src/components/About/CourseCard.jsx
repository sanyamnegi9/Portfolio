import React from 'react'

const CourseCard = ({img, title, desc}) => {
  return (
    <div className='course-card'>
      <img src={img} alt={title} className='course-card-img'/>
      <div className="course-card-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default CourseCard