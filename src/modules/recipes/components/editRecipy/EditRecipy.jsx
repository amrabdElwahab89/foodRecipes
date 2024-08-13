import React from "react";
import SecondaryTitle from "../../../shared/components/secondaryTitle/SecondaryTitle";
import { useNavigate } from "react-router-dom";

export default function EditRecipy() {
  const navigate = useNavigate();
  return (
    <>
      <SecondaryTitle
        title01={"Edit the"}
        title02={" Recipes"}
        text01={"you can now fill the meals easily using the table and form "}
        text02={", click here and sill it with the table !"}
        btnText={"All Recipes"}
        btnFunction={() => navigate("/layoutMaster/recipesList")}
      />
    </>
  );
}
