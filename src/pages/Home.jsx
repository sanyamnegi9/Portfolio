import React from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <Skills/>
      <Projects />
    </div>
  );
};

export default Home;
