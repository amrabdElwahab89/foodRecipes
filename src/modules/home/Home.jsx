import React, { useContext, useEffect } from "react";
import homeImage from "../../assets/images/underNavBar/home.png";
import "./Home.css";
import { authContext } from "../authentication/context/AuthDataContext";
import LoadingPage from "../shared/components/loadingPage/LoadingPage";
import MainTitle from "../shared/components/MainTitle/MainTitle";
import SecondaryTitle from "../shared/components/secondaryTitle/SecondaryTitle";

export default function Home() {
  const { getUserData, userData } = useContext(authContext);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {userData ? (
        <div>
          {/* Main Title */}
          <MainTitle
            image={homeImage}
            title={userData ? `Welcome ${userData.userName}` : "welcome"}
            paragraph={
              "This is a welcoming screen for the entry of the application , you can now see the options"
            }
          />

          <SecondaryTitle
            title01={"Fill the  "}
            title02={"Recipes"}
            title03={"!"}
            text01={
              "you can now fill the meals easily using the table and form ,"
            }
            text02={"click here and sill it with the table"}
            btnText={`Fill Recipes 
                ${(<i className="fa-solid fa-arrow-right ms-md-4 "></i>)}`}
          />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
