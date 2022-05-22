import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import {
  GET_FORMATION_LIST,
  GET_FORMATION_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const getformation = () => {
  return {
    type: GET_FORMATION_LIST,
  };
};
const getformationListSuccess = (payload) => {
  return {
    type: GET_FORMATION_LIST_SUCCESS,
    payload: payload,
  };
};
export const getformationApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    console.log("Token", token);
    dispatch(getformation());
    let result = await getApi("formation", {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    dispatch(getformationListSuccess(result.result));
  } catch (error) {}
};

export const addformationApi = (data, addToast) => async (dispatch) => {
  try {
    dispatch(getformation());
    let token = localStorage.getItem("token");
    let { title, description, offerType, price, addedBy, image } = data;
    // image: req.file.path,
    let formData = new FormData();
    formData.append("title", title);
    formData.append("desc", description);
    formData.append("domain", offerType);
    formData.append("price", price);
    formData.append("addedBy", addedBy);
    formData.append("image", image[0]);
    let result = await postApi("formation/add", formData, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("formation ajouter avec sucess", { appearance: "success" });
      dispatch(getformationApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};
export const EditformationApi = (id, data, addToast) => async (dispatch) => {
  try {
    dispatch(getformation());
    let token = localStorage.getItem("token");
    let result = await updateApi("formation/edit/" + id, data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("Ste ajouter avec sucess", { appearance: "success" });
      dispatch(getformationApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};

export const deleteformationApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await deleteApi("formation/delete/" + id, {
      headers: { "access-token": token },
    });
    if (result) {
      dispatch(getformationApi());
    }
  } catch (error) {}
};
