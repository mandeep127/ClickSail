import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const salesListApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/sales/list`, data);
      return response;
    } catch (error) {
      console.error("Error in salesListApi:", error);
      throw error;
    }
  };

  //orderProcessingApi-status
  export const orderProcessingApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/changeOrderStatus/Processing/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in salesListApi:", error);
      throw error;
    }
  };

  //orderrejected-status
  export const orderRejectApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/changeOrderStatus/Rejected/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in salesListApi:", error);
      throw error;
    }
  };

   //ordershipping-status
   export const orderShippingApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/changeOrderStatus/shipping/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in salesListApi:", error);
      throw error;
    }
  };

   //orderaccepted-status
   export const orderAcceptApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/changeOrderStatus/Accepted/${data}`, data);
      return response;
    } catch (error) {
      console.error("Error in salesListApi:", error);
      throw error;
    }
  };

  //transactions
  export const transactionsListApi = async (data) => {
    try {
      const response = await axios.get(`http://a-mdarji.com/api/admin/transactions/list`, data);
      return response;
    } catch (error) {
      console.error("Error in salesListApi:", error);
      throw error;
    }
  };