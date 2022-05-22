import axios from "axios";
export const BASE_URL = "http://127.0.0.1:3500";
const postApi = async (url, body, config = {}) => {
  try {
    let response = await axios.post(`${BASE_URL}/${url}`, body, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const updateApi = async (url, body, config = {}) => {
  try {
    let response = await axios.put(`${BASE_URL}/${url}`, body, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
const deleteApi = async (url, config = {}) => {
  try {
    let response = await axios.delete(`${BASE_URL}/${url}`, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
const getApi = async (url, config = {}) => {
  try {
    let response = await axios.get(`${BASE_URL}/${url}`, config);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export { getApi, postApi, deleteApi, updateApi };
