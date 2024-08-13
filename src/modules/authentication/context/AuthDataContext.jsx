import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Users_URL } from "../../../constants/END-POINTS";

export const authContext = createContext();

export default function AuthDataContext({ children }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  //   ..........................object to formData
  const appendToFormData = (data) => {
    const formData = new FormData();
    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("country", data.country);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("profileImage", data.profileImage[0]);
    formData.append("profileImage", data.profileImage);
    formData.append("confirmPassword", data.confirmPassword);
    return formData;
  };

  //   ..........................Register
  const newRegister = async (formData) => {
    const registerData = appendToFormData(formData);
    try {
      const response = await axios.post(Users_URL.register, registerData);
      toast.success("registeration Successfuly");
      navigate("/layoutMaster");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //   ..........................Log in

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3006/api/v1/Users/Login",
        formData
      );
      toast.success("Login Successfully");
      navigate("/layoutMaster");
      localStorage.setItem("token", response?.data?.token);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getUserData = () => {
    const decodedToken = jwtDecode(localStorage.getItem("token"));
    setUserData(decodedToken);
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

      toast.success(response?.data?.message);
      navigate("/resetPassword");
    } catch (error) {
      toast.error(error?.response?.data?.message);
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

      toast.success("Password Changed Successfuly");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <authContext.Provider
        value={{
          onSubmit,
          userData,
          getUserData,
          forgetPassword,
          resetPassword,
          newRegister,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
}
