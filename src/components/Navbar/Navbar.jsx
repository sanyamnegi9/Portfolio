import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import contactBtnIcon from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <div
        className="nav-items"
      >
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="skills"
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="projects"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="contact"
        >
          Contact
        </Link>
      </div>
      <button
        className="btn contact-btn"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <img src={contactBtnIcon} alt=""/>
        Contact Me
      </button>

      {/* mobile burger menu */}
      <img
        src={menu}
        alt="Menu"
        className="mobile-menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div
        className="mobile-nav-items"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="home"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="skills"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="projects"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="contact"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
