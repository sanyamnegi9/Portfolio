import React from "react";
import "../styles/Header.scss";
import bg from "../assets/image.png";
import hireBtn from "../assets/hireme.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="home">
      <div className="content">
        <span className="hello">Hello,</span>
        <span className="intro">
          I'm <span className="name">Sanyam</span>
          <br />
          Web Developer
        </span>
        <p className="header-desc">
          I am a skilled and passionate web developer with experience in
          creating visually appealing and user friendly websites.
        </p>
        <Link>
          <button className="btn hire-btn">
            <img src={hireBtn} alt="hire" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </div>
  );
};

export default Header;
