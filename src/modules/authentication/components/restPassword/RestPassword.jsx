import React, { useContext, useEffect } from "react";
import "./ResetPassword.css";
import { CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { userContext } from "../../../context/UserDataContext";
import logo from "../../../../assets/images/logIn/logo.svg";

export default function RestPassword() {
  const { resetPassword } = useContext(userContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = ({ email, password, confirmPassword, seed }) => {
    resetPassword(email, password, confirmPassword, seed);
  };
  return (
    <>
      <div className="auth-container ">
        <div className="resetPassword-window">
          {/* Image */}
          <img className="resetPassword-logo" src={logo} alt="" />

          {/* Title */}
          <div className="resetPassword-title-container ">
            <h3 className="resetPassword-tiltle "> Reset Password</h3>
            <p>Please Enter Your Otp or Check Your Inbox</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="resetPassword-form"
          >
            {/* --------------Email */}
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

            {/* --------------Password */}
            <div className="input-group mb-4">
              <span className="input-group-text" id="basic-addon1">
                <CiLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password Should be Valid Password",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-danger"> {errors.password.message} </p>
            )}

            {/* --------------Confirm Password */}
            <div className="input-group mb-4">
              <span className="input-group-text" id="basic-addon1">
                <CiLock />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="confirmPassword"
                aria-label="confirmPassword"
                aria-describedby="basic-addon1"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-danger"> {errors.confirmPassword.message} </p>
            )}

            {/* --------------OTP */}
            <div className="input-group mb-4">
              <span className="input-group-text" id="basic-addon1">
                <CiMobile1 />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="seed"
                aria-label="seed"
                aria-describedby="basic-addon1"
                {...register("seed", {
                  required: "seed is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]{4}$/,
                    message: "seed is required",
                  },
                })}
              />
            </div>
            {errors.seed && (
              <p className="text-danger"> {errors.seed.message} </p>
            )}

            {/* Button */}
            <div className="resetPassword-buttonContainer">
              <button type="submit" className="resetPassword-button">
                <span>Reset Password</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
