import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const authLoginApi = async (data) => {
  // const headers = {
  //   headers: {
  //     'Cookie': "laravel_session=eyJpdiI6InMrRmJyTWdFZDFuVmxmMi9mSnNBc1E9PSIsInZhbHVlIjoid1l0MWNWTDhjOHFpZklnZkpzaEJvNU5SVDlJenluaXFENVhIWFFuYlUwMTM3SFlSb3RtQStjcWJpQjZWRXMxOTRQUTQ2WUw5Qk93ZjBWQ2ttblBNYkxqdFJadFlqMklPK0hQL0tqUzJKMlVNUVhoTXlXcVdXMkRyd0tES3ZLNjYiLCJtYWMiOiJjZjlhYzIzMDc1ZjhkNzBlMzEyNzdlZDFiOWM0MTFmODEzZjEwYjQ0ZDA5MmM2N2VkZmUzZTQxOWVhYzg2MmRhIiwidGFnIjoiIn0%3D",
  //   }
  // };

  try {
    const response = await axios.post(`http://a-mdarji.com/api/admin/loginsubmit`, data);
    return response;
  } catch (error) {
    console.error("Error in authLoginApi:", error);
    throw error;
  }
};

export const authLogoutApi = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`http://a-mdarji.com/api/admin/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in Logout API:", error);
    throw error;
  }
};


export const forgotPasswordApi = async (data) => {
  // const headers = {
  //   headers: {
  //     'Cookie': "laravel_session=eyJpdiI6InMrRmJyTWdFZDFuVmxmMi9mSnNBc1E9PSIsInZhbHVlIjoid1l0MWNWTDhjOHFpZklnZkpzaEJvNU5SVDlJenluaXFENVhIWFFuYlUwMTM3SFlSb3RtQStjcWJpQjZWRXMxOTRQUTQ2WUw5Qk93ZjBWQ2ttblBNYkxqdFJadFlqMklPK0hQL0tqUzJKMlVNUVhoTXlXcVdXMkRyd0tES3ZLNjYiLCJtYWMiOiJjZjlhYzIzMDc1ZjhkNzBlMzEyNzdlZDFiOWM0MTFmODEzZjEwYjQ0ZDA5MmM2N2VkZmUzZTQxOWVhYzg2MmRhIiwidGFnIjoiIn0%3D",
  //   }
  // };

  try {
    const response = await axios.post(`http://a-mdarji.com/api/admin/forgot-password`, data);
    return response;
  } catch (error) {
    console.error("Error in authLoginApi:", error);
    throw error;
  }
};
