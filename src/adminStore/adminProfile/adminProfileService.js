import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

//admin profile
export const adminProfileApi = async (data) => {
    try {
      const response = await axios.get(
        `http://a-mdarji.com/api/admin/profile`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error in categoriesApiList:", error);
      throw error;
    }
  };
  