import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const homeApi = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/product`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

export const contactApi = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};
