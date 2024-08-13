import axios from "axios";
import React, { createContext, useState } from "react";
import { getToken, Recipes_URL, TAG_URL } from "../../../constants/END-POINTS";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RecipesContext = createContext();
export default function RecipesDataContext({ children }) {
  const navigate = useNavigate();
  const [recipesList, setRecipesList] = useState([]);
  const [tagId, setTagId] = useState([]);

  //   ..............................................Get Recipes
  const getRecipesList = async () => {
    try {
      const response = await axios.get(Recipes_URL.getRecipes, getToken());
      setRecipesList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   ..............................................Delete Recipes
  const deleteRecipes = async (recipesList) => {
    try {
      await axios.delete(Recipes_URL.deleteRecipe(recipesList), getToken());
      getRecipesList();
    } catch (error) {
      console.log(error);
    }
  };

  //   .............................................object to formData

  const appendToFormData = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("tagId", data.tagId);
    formData.append("recipeImage", data.recipeImage[0]);
    formData.append("categoriesIds", data.categoriesIds);
    return formData;
  };
  //   ..............................................Create Recipes
  const createRecipes = async (formData) => {
    const registerData = appendToFormData(formData);
    try {
      await axios.post(Recipes_URL.createRecipe, registerData, getToken());
      toast.success("recipy created Successfully");
      navigate("/layoutMaster/recipesList");
    } catch (error) {
      console.log(error);
    }
  };

  //   ..............................................Update Recipes
  const updateRecipes = async (recipesList) => {
    try {
      await axios.put(Recipes_URL.updateRecipe(recipesList), getToken());
      getRecipesList();
    } catch (error) {
      console.log(error);
    }
  };

  //   ..............................................Get Tags
  const getTags = async () => {
    try {
      const response = await axios.get(TAG_URL.getTagId);
      setTagId(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <RecipesContext.Provider
        value={{
          recipesList,
          getRecipesList,
          deleteRecipes,
          createRecipes,
          updateRecipes,
          tagId,
          getTags,
        }}
      >
        {children}
      </RecipesContext.Provider>
    </>
  );
}
