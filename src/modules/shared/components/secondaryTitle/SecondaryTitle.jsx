import React from "react";
import "./SecondaryTitle.css";

export default function SecondaryTitle({
  title01,
  title02,
  title03,
  text01,
  text02,
  btnText,
  btnFunction,
}) {
  return (
    <>
      <div className="secTitle-container  ">
        <div>
          <span className="secTitle-title">
            {title01} <span className="secTitle-subTitle"> {title02}</span>{" "}
            {title03}
          </span>
          <br />
          <span className="secTitle-text">{text01}</span>
          <br />
          <span className="secTitle-text"> {text02}</span>
        </div>
        <div>
          <button onClick={btnFunction} className="secTitle-button">
            <span> {btnText}</span>
          </button>
        </div>
      </div>
    </>
  );
}
