import React, { useContext, useEffect } from "react";
import UndernavBar from "../shared/components/underNavBar/UndernavBar";
import homeImage from "../../assets/images/underNavBar/home.png";
import "./Home.css";
import { userContext } from "../context/UserDataContext";

export default function Home() {
  const { getUserData, userData } = useContext(userContext);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div>
        <UndernavBar
          image={homeImage}
          title={userData ? `Welcome ${userData.userName}` : "welcome"}
          paragraph={
            "This is a welcoming screen for the entry of the application , you can now see the options"
          }
        />

        <div className="home-container ">
          {" "}
          <div>
            {" "}
            <span className="home-title">
              Fill the <span className="home-subTitle">Recipes</span> !
            </span>
            <br />
            <span className="home-text">
              you can now fill the meals easily using the table and form , click
              here and sill it with the table{" "}
            </span>
          </div>
          <div>
            <button className="home-button">
              <span>Fill Recipes</span>
              <i className="fa-solid fa-arrow-right ms-3"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
