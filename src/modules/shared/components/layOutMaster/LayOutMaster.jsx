import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import SidebarComponenet from "../sideBar/SidebarComponenet";

export default function LayOutMaster() {
  return (
    <>
      <div className="d-flex">
        <div>
          <SidebarComponenet />
        </div>

        <div className="w-100 mx-3">
          <NavBar />

          <Outlet />
        </div>
      </div>
    </>
  );
}
