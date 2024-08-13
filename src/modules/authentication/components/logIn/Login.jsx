import React, { useContext } from "react";
import "./Login.css";
import logo from "../../../../assets/images/logIn/logo.svg";
import { CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { authContext } from "../../context/AuthDataContext";

export default function Login() {
  const { onSubmit } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (formData) => {
    onSubmit(formData);
  };

  return (
    <>
      <div className="auth-container ">
        <div className="login-window">
          {/* Image */}
          <img className="login-logo" src={logo} alt="" />

          {/* Title */}
          <div className="login-title-container ">
            <h3 className="login-tiltle ">Log In</h3>
            <p>Welcome Back Please enter your details</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleLogin)} className="login-form">
            {/* ..................................Email */}
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

              {errors.email && (
                <p className="text-danger"> {errors.email.message} </p>
              )}
            </div>

            {/* ..................................Password */}
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

              {errors.password && (
                <p className="text-danger"> {errors.password.message} </p>
              )}
            </div>

            {/* Link */}
            <div className="login-links-container">
              <Link to={"/register"}>Register Now</Link>
              <Link to={"/forgetPassword"}>Forget Password</Link>
            </div>

            {/* Button */}
            <div className="login-buttonContainer">
              <button type="submit" className="login-button">
                <span>Log In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
