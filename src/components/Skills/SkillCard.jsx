import React from 'react'

const SkillCard = ({img, title, desc}) => {
  return (
    <div className='skill-card'>
      <img src={img} alt={title} className='skill-card-img'/>
      <div className="skill-card-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default SkillCard