import React from "react";
import "./About.scss";
import CourseCard from "./CourseCard";
import UiDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import SkillCard from "./SkillCard";
import {skillsData} from "../../data";

const About = () => {
  return (
    <div id="about" className="container">
        <h2>About Me</h2>
        <p className="desc">
          Hello! I'm a dedicated ReactJS developer with a passion for creating
          visually appealing and user-friendly websites. As a frontend
          enthusiast, I specialize in crafting seamless online experiences that
          adapt beautifully to various devices. With a focus on responsive
          design, I bring a blend of technical skills and creative flair to
          every project.
        </p>

      {/* Courses Section */}
      <h4>Courses</h4>
      <div className="courses-container">
        <CourseCard
          img={UiDesign}
          title="Ui / Ux Design"
          desc="This is a demo text, you can write your own content here"
        />
      </div>

      {/* Skills Section */}
      <h4>Skills</h4>
      <div className="skills-container">
        {skillsData.map(({ id, skillName, img }) => (
          <SkillCard id={id} img={img} skill={skillName} />
        ))}
      </div>
    </div>
  );
};

export default About;
