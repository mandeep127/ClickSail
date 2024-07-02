import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const authLoginApi = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/admin/login`, data);
    return response.data; // assuming your API returns data in a usable format
  } catch (error) {
    console.log("Error in authLoginApi:", error);
    throw error; // rethrow the error to be handled by the caller
  }
};
