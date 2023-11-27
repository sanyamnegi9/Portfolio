import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import {NavItems} from "../../data";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import cvImg from "../../assets/cv.jpg";



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
      <Link to="/" className="logo">
        Sanyam Negi
      </Link>
      <div className="nav-items">
        {NavItems.map(({ item, secLink }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            to={secLink}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Resume Button */}
      <button
        className="btn contact-btn"
        onClick={() => {
          window.open(cvImg, "_blank");
        }}
      >
        <FontAwesomeIcon icon={faFile} className="icon" />
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

      {/* mobile Nav Items */}
      <div
        className="mobile-nav-items"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        {NavItems.map(({ item, secLink }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            to={secLink}
            onClick={() => {
              setShowMenu(false);
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
