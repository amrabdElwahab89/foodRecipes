import axios from "axios";
import React, { createContext, useState } from "react";
import { CATEGORIES_URL, getToken } from "../../../constants/END-POINTS";

export const categoriesContext = createContext();

export default function CategoriesDataContext({ children }) {
  const [categoriesList, setCategoriesList] = useState([]);

  //   ..............................................Get Category
  const getCategoriesList = async () => {
    try {
      const response = await axios.get(
        CATEGORIES_URL.getCategories,
        getToken()
      );
      setCategoriesList(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  //   ..............................................Delte Category
  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(CATEGORIES_URL.deleteCategory(categoryId), getToken());
      getCategoriesList();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  //   ..............................................Create Category
  const createCategory = async (formData) => {
    try {
      const response = await axios.post(
        CATEGORIES_URL.createCategory,
        formData,
        getToken()
      );
      console.log(response);
      getCategoriesList();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  //   ..............................................Update Category
  const updateCategory = async (categoryId) => {
    try {
      const response = await axios.put(
        CATEGORIES_URL.updateCategory(categoryId),
        {},
        getToken()
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  return (
    <>
      <categoriesContext.Provider
        value={{
          categoriesList,
          getCategoriesList,
          deleteCategory,
          createCategory,
          updateCategory,
        }}
      >
        {children}
      </categoriesContext.Provider>
    </>
  );
}
