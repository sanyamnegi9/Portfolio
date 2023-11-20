import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import contactBtnIcon from "../../assets/contact.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 0) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     };

     window.addEventListener("scroll", handleScroll);

     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="nav-items">
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#portfolio">Portfolio</Link>
        <Link to="#contact">Contact</Link>
      </div>
      <button className="contact-btn">
        <img src={contactBtnIcon} alt="" className="contact-img" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
