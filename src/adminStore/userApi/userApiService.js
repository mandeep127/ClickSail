import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const userListApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/user/list`, data);
      return response;
    } catch (error) {
      console.error("Error in userListApi:", error);
      throw error;
    }
  };

 
  //add user
  export const userAddApi = async (data) => {
    try {
      const response = await axios.post(`http://a-mdarji.com/api/admin/user/add`, data);
      return response;
    } catch (error) {
      console.error("Error in userAddApi:", error);
      throw error;
    }
  };

  export const userStatusApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/user/status/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in userListApi:", error);
      throw error;
    }
  };

  //get edit
  export const userEditGetApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/user/edit/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in userListApi:", error);
      throw error;
    }
  };

  //edit user
  export const userEditPostApi = async ({id,data}) => {
    try {
      const response = await axios.post(`http://a-mdarji.com/api/admin/user/update/${id}`, data);
      return response;
    } catch (error) {
      console.error("Error in userAddApi:", error);
      throw error;
    }
  };

   //delete user
   export const userDeleteApi = async (data) => {
    try {
      const response = await axios.delete(`http://a-mdarji.com/api/admin/user/delete/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in userDeleteApi:", error);
      throw error;
    }
  };