import React from "react";
import UndernavBar from "../../../shared/components/underNavBar/UndernavBar";
import recipesImage from "../../../../assets/images/underNavBar/Recipes-list.svg";

export default function RecipesList() {
  return (
    <>
      <UndernavBar
        image={recipesImage}
        title={" Recipes Items"}
        paragraph={
          "You can now add your items that any user can order it from the Application and you can edits"
        }
      />
    </>
  );
}
