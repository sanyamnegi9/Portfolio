import React from "react";
import "./About.scss";
import CourseCard from "./CourseCard";
import SkillCard from "./SkillCard";
import { skillsData, coursesData } from "../../data";

const About = () => {
  return (
    <div id="about" className="container">
      <h2>About Me</h2>
      <p className="desc">
        Hello! I'm a dedicated ReactJS developer with a passion for creating
        visually appealing and user-friendly websites. As a frontend enthusiast,
        I specialize in crafting seamless online experiences that adapt
        beautifully to various devices. With a focus on responsive design, I
        bring a blend of technical skills and creative flair to every project.
      </p>

      {/* Courses Section */}
      <h4>Courses</h4>
      <p className="desc sec-desc">
        Explore my course journey: ReactJS, Responsive Web Design, Frontend
        Development. Witness my commitment to continuous learning and skill
        refinement.
      </p>
      <div className="courses-container">
        {coursesData.map(
          ({
            id,
            img,
            courseName,
            organization,
            skills,
            credentialUrl,
            certificate,
          }) => (
            <CourseCard
              id={id}
              img={img}
              title={courseName}
              organization={organization}
              skills={skills}
              credentialUrl={credentialUrl}
              certificate={certificate}
            />
          )
        )}
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
