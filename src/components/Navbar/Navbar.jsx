import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md">
      <div class="container-fluid mx-2">
        {/* Logo */}
        <Link class="fs-4 navbar-brand logo" href="/">
          Sanyam Negi
        </Link>

        {/* Menu Toggle button */}
        <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* Sidebar */}
        <div
          class="sidebar offcanvas offcanvas-end"
          tabindex="-"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              {" "}
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* sidebar body */}
          <div class="offcanvas-body fs-6 d-flex width-md-4 justify-content-start justify-content-md-end flex-column flex-md-row">
            <a class="nav-link" href="#Home">
              Home
            </a>
            <a class="nav-link" href="#about">
              About
            </a>
            <a class="nav-link" href="#courses">
              Courses
            </a>
            <a class="nav-link" href="#projects">
              Projects
            </a>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
