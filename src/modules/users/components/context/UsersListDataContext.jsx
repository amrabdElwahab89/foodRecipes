import axios from "axios";
import React, { createContext, useState } from "react";
import { getToken, Users_URL } from "../../../../constants/END-POINTS";

export const usersListContext = createContext();
export default function UsersListDataContext({ children }) {
  const [usersList, setUsersList] = useState([]);

  //   ..............................................Update users List
  const getUsersList = async () => {
    try {
      const response = await axios.get(Users_URL.getUserFilter, getToken());

      setUsersList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   ..............................................Delete users List
  const deleteUser = async () => {
    try {
      await axios.delete(Users_URL.delete(userID), getToken());
    } catch (error) {
      console.log(error);
    }
  };
  //   ..............................................Create users List
  //   ..............................................Update users List
  return (
    <>
      <usersListContext.Provider value={{ usersList, getUsersList }}>
        {children}
      </usersListContext.Provider>
    </>
  );
}
