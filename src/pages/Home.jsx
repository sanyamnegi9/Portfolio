import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import About from "../components/About/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
