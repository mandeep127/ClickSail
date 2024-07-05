import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export const loginUserApi = async (data) => {
  try {
    const response = await axios.post(`${API_URL}api/loginsubmit`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

export const registerUserApi = async (data) => {
  try {
    const response = await axios.post(`${API_URL}api/registersubmit`, data);
    return response;
  } catch (error) {
    console.error("Error in Api:", error);
    throw error;
  }
};

export const logoutUserApi = async () => {
  try {
    const response = await axios.post(`${API_URL}api/logout`);
    return response.data;
  } catch (error) {
    console.error("Error in Logout API:", error);
    throw error;
  }
};

// import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/";

// export const loginUser = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}api/loginsubmit`, {
//       username,
//       password,
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
