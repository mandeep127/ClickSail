import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const dashboardApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/dashboard`, data);
      return response;
    } catch (error) {
      console.error("Error in userListApi:", error);
      throw error;
    }
  };