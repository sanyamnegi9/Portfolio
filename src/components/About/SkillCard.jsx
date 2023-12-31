import React from 'react'

const SkillCard = ({id, img, skill}) => {
  return (
    <div className='skill-card-container' key={id}>
      <img src={img} alt="" />
      <h5>{skill}</h5>
    </div>
  )
}

export default SkillCard