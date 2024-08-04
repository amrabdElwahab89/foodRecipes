import React from "react";
import "./NotFound.css";
import logo from "../../../../assets/images/notFound/logo.svg";
import img from "../../../../assets/images/notFound/Group 48101676.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="notFound-container ">
        <div className="notFound-leftSection ">
          <div className="notFound-logo">
            <img className="w-100" src={logo} alt="" />
          </div>

          <div className="notFound-text">
            <h3 className="notFound-title">Oops </h3>
            <p className="notFound-p">Page not found </p>
            <p>
              This Page doesn’t exist or was removed!
              <br /> We suggest you back to home.
            </p>
            <Link to={"./layoutMaster"} className="notFound-link ">
              <i className="fa-solid fa-arrow-left "></i>
              <span>
                Back To <br /> Home
              </span>
            </Link>{" "}
          </div>
        </div>
        <div className="rightSection-Container">
          <div className="notFound-rightSection">
            <img className="w-100" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
