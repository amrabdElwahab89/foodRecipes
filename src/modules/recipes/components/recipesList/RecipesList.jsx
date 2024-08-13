import React, { useContext, useEffect, useState } from "react";
import MainTitle from "../../../shared/components/MainTitle/MainTitle";
import recipesImage from "../../../../assets/images/underNavBar/Recipes-list.svg";
import SecondaryTitle from "../../../shared/components/secondaryTitle/SecondaryTitle";
import Table from "react-bootstrap/Table";
import LoadingPage from "../../../shared/components/loadingPage/LoadingPage";
import { RecipesContext } from "../../context/RecipesDataContext";
import Modals from "../../../shared/components/modals/Modals";
import modalImg from "../../../../assets/images/modal/modalImg.png";
import { useNavigate } from "react-router-dom";

export default function RecipesList() {
  const navigate = useNavigate();
  // ----------------------------------------Context
  const { recipesList, getRecipesList, deleteRecipes, createRecipes } =
    useContext(RecipesContext);

  // ----------------------------------------Category ID for Edit & Delete
  const [recipeId, setRecipeId] = useState(0);

  // -------------------------Delete Recipe Modal
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (recipeId) => {
    setRecipeId(recipeId);
    setShowDelete(true);
  };

  // useEffect Mounted
  useEffect(() => {
    getRecipesList();
  }, []);

  return (
    <>
      {/* Delete Recipe Modal */}
      <Modals
        handleShow={handleShowDelete}
        show={showDelete}
        handleClose={handleCloseDelete}
        modalImg={modalImg}
        title={"Delete This Recipe?"}
        text={
          "Are you sure you want to delete this item? If you are sure, just click on delete."
        }
        needButton
        btnText={"Delete"}
        btnFunction={() => deleteRecipes(recipeId)}
      />

      <div className="text-center">
        {recipesList.length > 0 ? (
          <div>
            {/* Main Title */}
            <MainTitle
              image={recipesImage}
              title={"Recipes Items"}
              paragraph01={
                "You can now add your items that any user can order from the Application and you can edit them."
              }
            />

            {/* Sec Title */}
            <SecondaryTitle
              title01={"Recipe Table Details"}
              text01={"You can check all details"}
              btnText={"Add New Item"}
              btnFunction={() => navigate("/layoutMaster/addRecipe")}
            />

            {/* Table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recipesList.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.id}</td>
                    <td>
                      <img
                        className="w-25 "
                        src={`https://upskilling-egypt.com:3006/${elem.imagePath}`}
                        alt=""
                      />
                    </td>
                    <td>{elem.tag.name}</td>
                    <td>{elem.description}</td>
                    <td>{elem.price}</td>
                    <td>
                      <i
                        role="button"
                        onClick={() => handleShowDelete(elem.id)}
                        className="fa-solid fa-trash"
                      ></i>
                      <i
                        role="button"
                        onClick={() => navigate("/layoutMaster/edit-recipe")}
                        className="fa-solid fa-pen ms-4"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
    </>
  );
}
