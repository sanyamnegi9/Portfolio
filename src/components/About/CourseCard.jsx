import React from "react";
import { Link } from "react-scroll";
import { faArrowUpRightFromSquare, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseCard = ({
  id,
  img,
  title,
  organization,
  skills,
  credentialUrl,
  certificate,
}) => {
  return (
    <div className="course-card">
      <div className="organization-container">
        <img src={img} alt={title} className="course-card-img" />
        <p>{organization}</p>
      </div>
      <div className="course-card-desc">
        <h3 className="course-title">{title}</h3>
        <p className="course-skill">{skills}</p>
        <div className="course-links">
          <Link to={credentialUrl}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faCertificate}  size="lg"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
