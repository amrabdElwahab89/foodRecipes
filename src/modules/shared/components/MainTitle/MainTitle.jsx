import React from "react";
import "./MainTitle.css";

export default function MainTitle({ title, paragraph01, paragraph02, image }) {
  return (
    <>
      <div className="inderNavbar-container">
        {/* Left Section */}
        <div>
          <span className="underNavBar-title"> {title}</span> <br />
          <span className="underNavBar-text">{paragraph01}</span> <br />
          <span className="underNavBar-text">{paragraph02}</span>
        </div>
        {/* Right Section */}
        <div className="rightSection">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}
