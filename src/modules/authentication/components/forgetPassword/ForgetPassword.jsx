import React, { useContext, useEffect } from "react";
import "./ForgetPassword.css";
import { CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { userContext } from "../../../context/UserDataContext";
import logo from "../../../../assets/images/logIn/logo.svg";

export default function ForgetPassword() {
  const { forgetPassword } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = ({ email }) => {
    forgetPassword(email);
  };

  return (
    <>
      <div className="auth-container ">
        <div className="forgetPassword-window">
          {/* Image */}
          <img className="forgetPassword-logo" src={logo} alt="" />

          {/* Title */}
          <div className="forgetPassword-title-container ">
            <h3 className="forgetPassword-tiltle ">Forgot Your Password?</h3>
            <p>
              No worries! Please enter your email and we will send a password
              reset link{" "}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="forgetPassword-form"
          >
            <div className="input-group mb-4">
              <span className="input-group-text" id="basic-addon1">
                <CiMobile1 />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your E-mail"
                aria-label="email"
                aria-describedby="basic-addon1"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Email Should be Valid Email",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-danger"> {errors.email.message} </p>
            )}

            {/* Button */}
            <div className="forgetPassword-buttonContainer">
              <button type="submit" className="forgetPassword-button">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
