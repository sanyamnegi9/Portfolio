import React from 'react'

const SkillCard = ({img, title, desc}) => {
  return (
    <div className='skill-card'>
      <img src={img} alt={title} className='skill-card-img'/>
      <div className="skill-card-desc">
        <h2 className='skill-card-title'>{title}</h2>
        <p className='skill-card-desc'>{desc}</p>
      </div>
    </div>
  )
}

export default SkillCard