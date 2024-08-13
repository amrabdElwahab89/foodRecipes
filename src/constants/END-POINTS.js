const BASE_URL = "https://upskilling-egypt.com:3006/api/v1";

// ......................................................Users
const BASE_Users = `${BASE_URL}/Users/`;
export const Users_URL = {
  login: `${BASE_Users}/Login`,
  register: `${BASE_Users}/Register`,
  createAdmin: `${BASE_Users}/Create`,
  delete: (id) => `${BASE_Users}/${id}`,
  getUser: (id) => `${BASE_Users}/${id}`,
  verifyUser: `${BASE_Users}/verify`,
  currentUser: `${BASE_Users}/currentUser`,
  getUserFilter: `${BASE_Users}`,
  updateProfile: `${BASE_Users}`,
  updatePassword: `${BASE_Users}/ChangePassword`,
  forgetPassword: `${BASE_Users}/Request`,
  resetPassword: `${BASE_Users}/Reset`,
};

// ......................................................Categories

const BASE_CATEGORIES = `${BASE_URL}/Category/`;

export const CATEGORIES_URL = {
  createCategory: `${BASE_CATEGORIES}`,
  getCategories: `${BASE_CATEGORIES}`,
  getCategory: (id) => `${BASE_CATEGORIES}/${id}`,
  deleteCategory: (id) => `${BASE_CATEGORIES}/${id}`,
  updateCategory: (id) => `${BASE_CATEGORIES}/${id}`,
};

// ......................................................Recipes
const BASE_RECIPES = `${BASE_URL}/Recipe/`;

export const Recipes_URL = {
  createRecipe: `${BASE_RECIPES}`,
  getRecipes: `${BASE_RECIPES}`,
  getRecipe: (id) => `${BASE_RECIPES}/${id}`,
  deleteRecipe: (id) => `${BASE_RECIPES}/${id}`,
  updateRecipe: (id) => `${BASE_RECIPES}/${id}`,
};

// ......................................................tagId
const BASE_tagId = `${BASE_URL}/tag/`;

export const TAG_URL = {
  getTagId: `${BASE_tagId}`,
};

export const getToken = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};
