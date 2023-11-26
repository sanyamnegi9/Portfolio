import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <Link to="/">
        <h1 className="logo">Sanyam Negi</h1>
      </Link>
      <div className="nav-items">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          to="home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          to="about"
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          to="projects"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-60}
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
        <FontAwesomeIcon icon={faFile} className="icon" />
        {/* <img src={contactBtnIcon} alt="" /> */}
        Resume
      </button>

      {/* mobile burger menu */}
      {showMenu ? (
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "#f1f10e" }}
          className="mobile-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#f1f10e" }}
          className="mobile-menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}

      <div
        className="mobile-nav-items"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-60}
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
          offset={-60}
          duration={500}
          to="about"
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
          offset={-60}
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
          offset={-60}
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
