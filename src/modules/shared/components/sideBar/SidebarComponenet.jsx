import React, { useState } from "react";
import "./SideBarComponent.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/sideBar/logo.png";

export default function SidebarComponenet() {
  const [toggledStatus, setToggledStatus] = useState(true);

  const toggled = () => {
    setToggledStatus(!toggledStatus);
  };

  return (
    <>
      <div className="sideBar-container vh-100">
        {" "}
        <Sidebar collapsed={toggledStatus}>
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "#1F263E",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem onClick={toggled} component={<Link to="/layoutMaster" />}>
              <img src={logo} alt="" />
            </MenuItem>
            <MenuItem
              icon={<i className="fw-bold fs-5 fa-regular fa-house"></i>}
              component={<Link to="/layoutMaster/home" />}
            >
              {" "}
              Home
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-user-group"></i>}
              component={<Link to="/layoutMaster/users" />}
            >
              Users
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-bars"></i>}
              component={<Link to="/layoutMaster/recipesList" />}
            >
              {" "}
              Recipes
            </MenuItem>
            <MenuItem
              icon={<i className="fa-regular fa-rectangle-list"></i>}
              component={<Link to="/layoutMaster/categories" />}
            >
              {" "}
              Categories
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-unlock"></i>}
              component={<Link to="/layoutMaster/changePassword" />}
            >
              Change Password
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-right-from-bracket"></i>}
              component={<Link to="/log out" />}
            >
              {" "}
              Log out
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
