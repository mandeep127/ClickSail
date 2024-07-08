import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const productApi = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/shop/${data}`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//product - details
export const detailsApi = async (data) => {
  try {
    const response = await axios.get(
      `${API_URL}/product/details/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};
//add product to cart
export const addCartApi = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/addcart/${data}`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};
