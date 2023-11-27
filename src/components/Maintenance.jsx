import React from "react";
import "../styles/Maintenance.scss";
import maintenanceImg from "../assets/maintenanceImg.png";
import { Link } from "react-scroll";

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <img src={maintenanceImg} alt="" className="main-img" />
      <h5>page is under construction</h5>
      <p>
        Our website is under construction, we are working very herd to give you
        the best experience with this one.
      </p>
      <Link to="/">
        <button className="btn back-btn">go back!</button>
      </Link>
    </div>
  );
};

export default Maintenance;
