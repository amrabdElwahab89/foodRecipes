import React, { useContext } from "react";
import "./Register.css";
import logo from "../../../../assets/images/logIn/logo.svg";
import { CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { authContext } from "../../context/AuthDataContext";
import { useForm } from "react-hook-form";

export default function Register() {
  const { newRegister } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (formData) => {
    newRegister(formData);
  };
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
          <form className="register-form " onSubmit={handleSubmit(handleLogin)}>
            {/* Left-Section */}
            <div className="row">
              <div className="left-section col-md-6">
                {/* ..................................User Name */}
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
                    {...register("userName", {
                      required: "userName is required",
                      pattern: {
                        value: /^[A-Za-z][A-Za-z0-9_]{5,29}$/,
                        message: "userName Required",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger"> {errors.password.message} </p>
                  )}
                </div>

                {/* ..................................Country*/}
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    aria-label="Country"
                    aria-describedby="basic-addon1"
                    {...register("country", {
                      required: "Country is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "country Required",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger"> {errors.password.message} </p>
                  )}
                </div>

                {/* ..................................Password*/}
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
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "password Should be Valid ",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger"> {errors.password.message} </p>
                  )}
                </div>
              </div>

              {/* Right-Section */}
              <div className="right-section col-md-6">
                {/* ..................................Email*/}
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
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email Should be Valid Email",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger"> {errors.password.message} </p>
                  )}
                </div>

                {/* ..................................Phone Number*/}
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
                    {...register("phoneNumber", {
                      required: "phoneNumber is required",
                      pattern: {
                        value: /^[1-9][0-9]{9}$/,
                        message: "Phone Number Should be Valid ",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger"> {errors.password.message} </p>
                  )}
                </div>

                {/* ..................................Confirm Password*/}
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <CiLock />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    aria-label="confirmPassword"
                    aria-describedby="basic-addon1"
                    {...register("confirmPassword", {
                      required: "confirmPassword is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "confirmPassword same to password",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-danger"> {errors.password.message} </p>
                )}
              </div>

              {/* ..................................Upload Image*/}
              <div className="input-group mb-4">
                <input
                  type="file"
                  className="form-control "
                  placeholder="profileImage"
                  aria-label="profileImage"
                  aria-describedby="basic-addon1"
                  {...register("profileImage", {
                    required: "profileImage is required",
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-danger"> {errors.password.message} </p>
              )}
            </div>

            {/* Link */}
            <div className="register-links-container">
              <Link to={"/login"}>Login Now ? </Link>
            </div>

            {/* Button */}
            <button type="submit " className="register-button w-100 ">
              <span>Register</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
