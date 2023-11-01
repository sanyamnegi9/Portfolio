import React, { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand mx-md-4 px-3 nav-logo" href="/">
          Navbar
        </Link>
        <div
          className="navbar-toggle show"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? (
            <FontAwesomeIcon icon={faXmark} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
          )}
        </div>
        <div
          className="collapse navbar-collapse justify-content-end my-0 nav-links"
          id="navbarTogglerDemo02"
        >
          <NavLink to="/" className="nav-link px-3 py-2 rounded-2">
            Home
          </NavLink>
          <NavLink to="/contact" className="nav-link px-3 py-2  rounded-2">
            Contact
          </NavLink>
          <NavLink to="projects" className="nav-link px-3 py-2  rounded-3">
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
