import React, { useContext, useEffect } from "react";
import SecondaryTitle from "../../../shared/components/secondaryTitle/SecondaryTitle";
import { useNavigate } from "react-router-dom";
import { RecipesContext } from "../../context/RecipesDataContext";
import { useForm } from "react-hook-form";
import { categoriesContext } from "../../../categories/context/CategoriesDataContext";

export default function AddRecipy() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createRecipes, getTags, tagId } = useContext(RecipesContext);
  const { getCategoriesList, categoriesList } = useContext(categoriesContext);

  const handleLogin = (formData) => {
    createRecipes(formData);
  };

  useEffect(() => {
    getCategoriesList();
    getTags();
  }, []);

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

      <form onSubmit={handleSubmit(handleLogin)} className="login-form">
        {/* ..................................name */}
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Recipe Name"
            aria-label="Recipe Name"
            aria-describedby="basic-addon1"
            {...register("name", {
              required: "Recipe Name is required",
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "Recipe Name",
              },
            })}
          />

          {errors.name && (
            <p className="text-danger"> {errors.name.message} </p>
          )}
        </div>

        {/* ..................................Description */}
        <div className="input-group mb-4">
          <textarea
            className="form-control"
            placeholder="Description *"
            {...register("description", {
              required: "description is required",
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "description ",
              },
            })}
          />

          {errors.description && (
            <p className="text-danger"> {errors.description.message} </p>
          )}
        </div>

        {/* ..................................price */}
        <div className="input-group mb-4">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            aria-label="Price"
            aria-describedby="basic-addon1"
            {...register("price", {
              required: "price is required",
              pattern: {
                value: /^\d+$/,
                message: "price",
              },
            })}
          />

          {errors.price && (
            <p className="text-danger"> {errors.price.message} </p>
          )}
        </div>

        {/* ..................................tagId */}
        <div className="input-group mb-4">
          <select
            className="form-control"
            {...register("tagId", {
              required: "tagId is required",
            })}
          >
            {tagId
              ? tagId.map((elem, index) => (
                  <option value={elem.id} key={index}>
                    {elem.name}
                  </option>
                ))
              : ""}
          </select>

          {errors.tagId && (
            <p className="text-danger"> {errors.tagId.message} </p>
          )}
        </div>

        {/* ..................................recipeImage */}
        <div className="input-group mb-4">
          <input
            type="file"
            className="form-control"
            placeholder="Recipe Name"
            aria-label="Recipe Name"
            aria-describedby="basic-addon1"
            {...register("recipeImage", {
              required: "recipe Image is required",
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "recipe Image",
              },
            })}
          />

          {errors.recipeImage && (
            <p className="text-danger"> {errors.recipeImage.message} </p>
          )}
        </div>

        {/* ..................................categoriesIds */}
        <div className="input-group mb-4">
          <select
            className="form-control"
            {...register("categoriesIds", {
              required: "categoriesIds is required",
            })}
          >
            {categoriesList
              ? categoriesList.map((ele, index) => (
                  <option key={index} value={ele.id}>
                    {" "}
                    {ele.name}{" "}
                  </option>
                ))
              : "no"}
          </select>

          {errors.categoriesIds && (
            <p className="text-danger"> {errors.categoriesIds.message} </p>
          )}
        </div>

        {/* ----------------------------------Buttons */}
        <div className="d-flex justify-align-content-md-center">
          {" "}
          {/* ----------------------------------Save Button */}
          <div className="login-buttonContainer">
            <button type="submit" className="login-button">
              <span>Save</span>
            </button>
          </div>
          {/* ----------------------------------Cancel Button */}
          {/* <div className="login-buttonContainer">
            <button type="reset" className="login-button">
              <span>Cancel</span>
            </button>
          </div> */}
        </div>
      </form>
    </>
  );
}
