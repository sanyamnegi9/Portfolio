import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "../components/Courses";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-auto mx-3">
      <div className="row">
        <div className="col-lg-1 icons"></div>
        <div className="col-lg-10 main-body">
          <Header />
          <About />
          <Courses />
          <Projects />
          <Contact />
        </div>
        <div className="col-lg-1 branding"></div>
      </div>
    </div>
  );
};

export default Home;
