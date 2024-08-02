import React from "react";
import "./UnderNavBar.css";

export default function UndernavBar({ title, paragraph, image }) {
  return (
    <>
      <div className="inderNavbar-container">
        {/* Left Section */}
        <div>
          <span className="underNavBar-title"> {title}</span>
          <p className="underNavBar-text">{paragraph}</p>
        </div>
        {/* Right Section */}
        <div className="rightSection">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}
