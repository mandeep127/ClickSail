import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const productApi = async (data) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/shop/${data}`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//product - details
export const detailsApi = async (data) => {
  try {
    const response = await axiosInstance.get(
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
    const response = await axiosInstance.post(
      `${API_URL}/addcart/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//show product in cart
export const showCartApi = async (data) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/showcart`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

export const removeCartApi = async (data) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/delete/${data}`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

//payment checkout button
export const checkoutApi = async (data) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}/checkout/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

// Razorpay payment callback
export const paymentCallbackApi = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/razorpay/callback`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

// razorpay  payment status
export const paymentStatusApi = async (data) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}/payment/${data}/${data}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};
