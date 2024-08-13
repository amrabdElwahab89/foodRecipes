import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./modules/authentication/components/logIn/Login";
import LayoutAuth from "./modules/shared/components/layOutAuthentication/LayoutAuth";
import RestPassword from "./modules/authentication/components/restPassword/RestPassword";
import NotFound from "./modules/shared/components/notFound/NotFound";
import Register from "./modules/authentication/components/register/Register";
import ForgetPassword from "./modules/authentication/components/forgetPassword/ForgetPassword";
import RecipesList from "./modules/recipes/components/recipesList/RecipesList";
import CategoriesList from "./modules/categories/components/categoriesList/CategoriesList";
import UsersList from "./modules/users/components/usersList/UsersList";
import LayOutMaster from "./modules/shared/components/layOutMaster/LayOutMaster";
import Home from "./modules/home/Home";
import UserDataContext from "./modules/authentication/context/AuthDataContext";
import ProtectedRoute from "./modules/shared/components/protectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoriesDataContext from "./modules/categories/context/CategoriesDataContext";
import RecipesDataContext from "./modules/recipes/context/RecipesDataContext";
import UsersListDataContext from "./modules/users/components/context/UsersListDataContext";
import AuthDataContext from "./modules/authentication/context/AuthDataContext";
import AddRecipy from "./modules/recipes/components/addRecipy/AddRecipy";
import EditRecipy from "./modules/recipes/components/editRecipy/EditRecipy";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: (
        <UserDataContext>
          <LayoutAuth />
        </UserDataContext>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        { path: "resetPassword", element: <RestPassword /> },
        { path: "register", element: <Register /> },
        {
          path: "forgetPassword",
          element: <ForgetPassword />,
        },
      ],
    },
    {
      path: "/layoutMaster",
      element: (
        <CategoriesDataContext>
          <AuthDataContext>
            <LayOutMaster />
          </AuthDataContext>
        </CategoriesDataContext>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              {" "}
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "recipesList",
          element: (
            <RecipesDataContext>
              <RecipesList />
            </RecipesDataContext>
          ),
        },
        {
          path: "categories",
          element: (
            <CategoriesDataContext>
              <CategoriesList />
            </CategoriesDataContext>
          ),
        },
        {
          path: "users",
          element: (
            <UsersListDataContext>
              <UsersList />
            </UsersListDataContext>
          ),
        },
        {
          path: "addRecipe",
          element: (
            <RecipesDataContext>
              <AddRecipy />
            </RecipesDataContext>
          ),
        },

        {
          path: "edit-recipe",
          element: (
            <RecipesDataContext>
              <EditRecipy />
            </RecipesDataContext>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer autoClose={2500} />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
