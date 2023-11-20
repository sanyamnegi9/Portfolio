import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "../components/Courses";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Courses />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
