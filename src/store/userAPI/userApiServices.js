import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const showOrdersApi = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/orders`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//orders details -user profile
export const ordersDetailsApi = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/orders-details`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//show user profile
export const showUserProfileApi = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/profile`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//update user profile
export const updateUserProfileApi = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/profile/update`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//change user password
export const changePasswordApi = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/change-password`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};
