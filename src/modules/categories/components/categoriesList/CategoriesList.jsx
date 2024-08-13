import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import LoadingPage from "../../../shared/components/loadingPage/LoadingPage";
import MainTitle from "../../../shared/components/MainTitle/MainTitle";
import categoriesImg from "../../../../assets/images/categories/categories.png";
import SecondaryTitle from "../../../shared/components/secondaryTitle/SecondaryTitle";
import { categoriesContext } from "../../context/CategoriesDataContext";
import Modals from "../../../shared/components/modals/Modals";
import modalImg from "../../../../assets/images/modal/modalImg.png";
import { useForm } from "react-hook-form";
import { CiMobile1 } from "react-icons/ci";

export default function CategoriesList() {
  // ----------------------------------------Context
  const {
    categoriesList,
    getCategoriesList,
    deleteCategory,
    createCategory,
    updateCategory,
  } = useContext(categoriesContext);

  // ----------------------------------------form & Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ----------------------------------------Category ID for Edit & Delete
  const [categoryId, setCategoryId] = useState(0);

  {
    /* -------------------------Create Category Modal */
  }
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = (categoryId) => {
    setCategoryId(categoryId);
    setShowCreate(true);
  };

  {
    /* -------------------------Edit Category Modal */
  }
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (categoryId) => {
    setCategoryId(categoryId);
    setShowEdit(true);
  };

  {
    /* -------------------------Delete Category Modal */
  }
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (categoryId) => {
    setCategoryId(categoryId);
    setShowDelete(true);
  };

  /* -------------------------useEffect Mounted*/
  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <>
      {/* -----------------------------Create Category Modal */}
      <Modals
        handleShow={handleShowCreate}
        show={showCreate}
        handleClose={handleCloseCreate}
        title={"Add Category ?"}
        text={
          <form
            onSubmit={handleSubmit(createCategory)}
            className="login-form  mx-5"
          >
            {/* ..................................Email */}
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                aria-label="name"
                aria-describedby="basic-addon1"
                {...register("name", {
                  required: "Category Name is required",
                })}
              />

              {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
              )}
            </div>

            {/* ------------------------------------Button */}
            <div className="login-buttonContainer">
              <button
                type="submit"
                className="login-button"
                onClick={handleCloseCreate}
              >
                <span>Save</span>
              </button>
            </div>
          </form>
        }
      />

      {/* -----------------------------Edit Category Modal */}
      <Modals
        handleShow={handleShowEdit}
        show={showEdit}
        handleClose={handleCloseEdit}
        modalImg={modalImg}
        title={"Edit This Category ?"}
        text={
          " are you sure you want to Edit this item ? if you are sure justclick on Edit it"
        }
        needButton
        btnText={"Edit Category"}
        btnFunction={() => deleteCategory(categoryId)}
      />

      {/* -----------------------------Delete Category Modal */}
      <Modals
        handleShow={handleShowDelete}
        show={showDelete}
        handleClose={handleCloseDelete}
        modalImg={modalImg}
        title={"Delete This Category ?"}
        text={
          " are you sure you want to delete this item ? if you are sure justclick on delete it"
        }
        needButton
        btnText={"Delete"}
        btnFunction={() => deleteCategory(categoryId)}
      />

      <div className="text-center">
        {categoriesList.length > 0 ? (
          <div className="m-3">
            {/* -----------------------------Main Title */}
            <MainTitle
              title={"Categories Items"}
              paragraph01={
                "You can now add your items that any user can order it from "
              }
              paragraph02={"the Application and you can edit"}
              image={categoriesImg}
            />

            {/* -----------------------------Sec Title */}
            <SecondaryTitle
              title01={"Categories Table Details"}
              text01={"You can check all details"}
              btnText={"Add New Category"}
              btnFunction={handleShowCreate}
            />

            {/* -----------------------------Table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Creation Date</th>
                  <th>Modification Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categoriesList.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                    <td>{elem.creationDate}</td>
                    <td>{elem.modificationDate}</td>
                    <td>
                      <i
                        role="button"
                        onClick={() => handleShowDelete(elem.id)}
                        className="fa-solid fa-trash"
                      ></i>
                      <i
                        role="button"
                        onClick={() => handleShowEdit(elem.id)}
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
