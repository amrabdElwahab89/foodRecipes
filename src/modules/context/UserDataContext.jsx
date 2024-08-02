import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const userContext = createContext();

export default function UserDataContext({ children }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  //   ..........................Log in

  const onSubmit = async (email, password) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3006/api/v1/Users/Login",
        {
          email,
          password,
        }
      );
      toast.success("Login Successfully");
      navigate("/layoutMaster");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getUserData = () => {
    const decodedToken = jwtDecode(localStorage.getItem("token"));
    setUserData(decodedToken);
    console.log(decodedToken);
  };

  //   ..........................Forget Passwprd

  const forgetPassword = async (email) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request",
        {
          email,
        }
      );

      toast.success(response.data.message);
      navigate("/resetPassword");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //   ..........................Reset Password

  const resetPassword = async (email, password, confirmPassword, seed) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3006/api/v1/Users/Reset",
        {
          email,
          password,
          confirmPassword,
          seed,
        }
      );
      console.log(response);
      toast.success("Password Changed Successfuly");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <userContext.Provider
        value={{
          onSubmit,
          userData,
          getUserData,
          forgetPassword,
          resetPassword,
        }}
      >
        {children}
      </userContext.Provider>
    </>
  );
}
