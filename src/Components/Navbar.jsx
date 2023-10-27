import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="nav">
      <div className="brand">
        <Link to="/">Sanyam Negi</Link>
      </div>
      <div className={`nav-links  ${menuOpen ? "open" : ""}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;
