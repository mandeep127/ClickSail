import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

//list
export const categoriesListApi = async (data) => {
  try {
    const response = await axios.get(
      `http://a-mdarji.com/api/admin/category/list`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in categoriesApiList:", error);
    throw error;
  }
};

//add user
export const categoryAddApi = async (data) => {
  try {
    const response = await axios.post(
      `http://a-mdarji.com/api/admin/category/add`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in categoryAddApi:", error);
    throw error;
  }
};

//status
export const categoriesStatusApi = async (data) => {
  try {
    const response = await axios.get(
      `http://a-mdarji.com/api/admin/category/status/${data}`,
      data
    );

    return response;
  } catch (error) {
    console.error("Error in categoriesApiList:", error);
    throw error;
  }
};

//editGet
export const categoryEditGetApi = async (data) => {
  try {
    const response = await axios.get(
      `http://a-mdarji.com/api/admin/category/edit/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in categoryEditGetApi:", error);
    throw error;
  }
};

//update category
export const categoryEditPostApi = async ({id, data}) => {
  try {
    const response = await axios.post(
      `http://a-mdarji.com/api/admin/category/update/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in categoryEditPostApi:", error);
    throw error;
  }
};

//delete user
export const categoryDeleteApi = async (data) => {
  try {
    const response = await axios.delete(
      `http://a-mdarji.com/api/admin/category/delete/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in userDeleteApi:", error);
    throw error;
  }
};
