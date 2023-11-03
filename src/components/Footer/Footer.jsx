import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-3">
      <Link to="https://github.com/sanyamnegi9">
        &copy; Copyright - 2023
        <br />
        Designed and developed by Sanyam Negi
      </Link>
    </div>
  );
};

export default Footer;
