import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

//list
export const productListApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/product/list`, data);
      return response;
    } catch (error) {
      console.error("Error in productListApi:", error);
      throw error;
    }
  };

  //add
  export const productAddApi = async (data) => {
    try {
      const response = await axios.post(`http://a-mdarji.com/api/admin/product/add`, data);
      return response;
    } catch (error) {
      console.error("Error in productAddApi:", error);
      throw error;
    }
  };

  //status
  export const productStatusApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/product/status/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in productListApi:", error);
      throw error;
    }
  };

  //edit get
  export const productEditGetApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/product/edit/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in productEditGetApi:", error);
      throw error;
    }
  };

  //edit post
  export const productEditPostApi = async ({id, data}) => {
    try {
      const response = await axios.post(`http://a-mdarji.com/api/admin/product/update/${id}`, data);
      return response;
    } catch (error) {
      console.error("Error in productEditPostApi:", error);
      throw error;
    }
  };

  //delete
  export const productDeleteApi = async (data) => {
    try {
      const response = await axios.delete(`http://a-mdarji.com/api/admin/product/delete/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in productDelete:", error);
      throw error;
    }
  };
