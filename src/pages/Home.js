import React from "react";
import "../styles/Home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
