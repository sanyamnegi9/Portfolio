import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container-auto mx-3">
      <div className="row">
        <div className="col-lg-1 icons"></div>
        <div className="col-lg-10 main-body">{/* main body here */}</div>
        <div className="col-lg-1 branding"></div>
      </div>
    </div>
  );
};
