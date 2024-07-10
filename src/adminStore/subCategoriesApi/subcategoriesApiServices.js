import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

//list
export const subcategoriesListApi = async (data) => {
  try {
    const response = await axios.get(
      `http://a-mdarji.com/api/admin/subcategories/list`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in subcategoriesApiList:", error);
    throw error;
  }
};

//add subcategories
export const subcategoriesAddApi = async (data) => {
  try {
    const response = await axios.post(
      `http://a-mdarji.com/api/admin/subcategory/add`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in subcategoriesAddApi:", error);
    throw error;
  }
};

//status
export const subcategoriesStatusApi = async (data) => {
  try {
    const response = await axios.get(
      `http://a-mdarji.com/api/admin/subcategory/status/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in subcategoriesStatusApi:", error);
    throw error;
  }
};

//edit get
export const subCategoryEditGetApi = async (data) => {
  try {
    const response = await axios.get(
      `http://a-mdarji.com/api/admin/subcategory/edit/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in subCategoryEditGetApi:", error);
    throw error;
  }
};

//edit post
export const subCategoryEditPostApi = async ({id, data}) => {
  try {
    const response = await axios.post(
      `http://a-mdarji.com/api/admin/subcategory/update/${id}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in subCategoryEditGetPost:", error);
    throw error;
  }
};

//delete
export const subCategoryDeleteApi = async (data) => {
  try {
    const response = await axios.delete(
      `http://a-mdarji.com/api/admin/subcategory/delete/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in subCategoryDelete:", error);
    throw error;
  }
};