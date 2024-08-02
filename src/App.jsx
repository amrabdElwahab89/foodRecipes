import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
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
import UserDataContext from "./modules/context/UserDataContext";
import ProtectedRoute from "./modules/shared/components/protectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <UserDataContext>
          <LayOutMaster />
        </UserDataContext>
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
          element: <RecipesList />,
        },
        {
          path: "categories",
          element: <CategoriesList />,
        },
        {
          path: "users",
          element: <UsersList />,
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
