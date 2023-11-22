import React from 'react'
import "./Skill.scss"
import SkillCard from "./SkillCard";
import UiDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";



const Skill = () => {
  return (
    <div id="skills">
      <span className="skill-title">What I do</span>
      <p className="skill-desc">
        I am a skilled and passionate web developer with experience in making
        user friendly and responsive web apps.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veritatis, itaque labore non unde accusantium sit, adipisci illo consectetur quia, repudiandae neque! Harum reprehenderit voluptatibus sunt eum. Saepe eveniet nulla, enim fugit ex ut quaerat explicabo officia vel harum repudiandae rem in modi quis maiores ipsam! Laboriosam in quas voluptatum.
      </p>
      <div className="skills-container">
        <SkillCard
          img={UiDesign}
          title="Ui / Ux Design"
          desc="This is a demo text, you can write your own content here"
        />
        <SkillCard
          img={WebDesign}
          title="Website Design"
          desc="This is a demo text, you can write your own content here. This is a demo text, you can write your own content here."
        />
        <SkillCard
          img={AppDesign}
          title="App Design"
          desc="This is a demo text, you can write your own content here. This is a demo text,"
        />
      </div>
    </div>
  );
}

export default Skill