import React, { useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import LoadingPage from "../../../shared/components/loadingPage/LoadingPage";
import MainTitle from "../../../shared/components/MainTitle/MainTitle";
import SecondaryTitle from "../../../shared/components/secondaryTitle/SecondaryTitle";
import usersImg from "../../../../assets/images/users/users.png";
import { usersListContext } from "../context/UsersListDataContext";
import { useNavigate } from "react-router-dom";

export default function UsersList() {
  const { usersList, getUsersList } = useContext(usersListContext);

  const navigate = useNavigate();
  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <>
      <div className="text-center">
        {usersList.length > 0 ? (
          <div className="m-3">
            {/* -----------------------------Main Title */}
            <MainTitle
              title={"Users List"}
              paragraph01={
                "You can now add your items that any user can order it "
              }
              paragraph02={"from the Application and you can edit"}
              image={usersImg}
            />

            {/* -----------------------------Sec Title */}
            <SecondaryTitle
              title01={"Users Table Details"}
              text01={"You can check all details"}
              btnText={"Add New User"}
              btnFunction={() => navigate("/register")}
            />

            {/* -----------------------------Table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>phoneNumber</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {usersList.map((element, index) => (
                  <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.imagePath}</td>
                    <td>{element.userName}</td>
                    <td>{element.email}</td>
                    <td>{element.country}</td>
                    <td>{element.phoneNumber}</td>
                    <td role="button">
                      <i className="fa-solid fa-trash"></i>
                      <i className="fa-solid fa-pen ms-4"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
    </>
  );
}
