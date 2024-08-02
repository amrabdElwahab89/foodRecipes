import React from "react";
import "./Register.css";
import logo from "../../../../assets/images/logIn/logo.svg";
import { CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
export default function Register() {
  return (
    <>
      <div className="auth-container ">
        <div className="register-window">
          {/* Image */}
          <img className="register-logo" src={logo} alt="" />

          {/* Title */}
          <div className="register-title-container ">
            <h3 className="register-tiltle ">Register</h3>
            <p>Welcome Back Please enter your details</p>
          </div>

          {/* Form */}
          <form className="register-form ">
            {/* Left-Section */}

            <div className="row">
              {" "}
              <div className="left-section col-md-6">
                {" "}
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiMobile1 />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Countery"
                    aria-label="Countery"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-4 ">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              {/* Right-Section */}
              <div className="right-section col-md-6">
                {" "}
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your E-mail"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    aria-label="phone number"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Link */}
          <div className="register-links-container">
            <Link to={"/login"}>Login Now ? </Link>
          </div>

          {/* Button */}
          <button className="register-button">
            <span>Register</span>
          </button>
        </div>
      </div>
    </>
  );
}
