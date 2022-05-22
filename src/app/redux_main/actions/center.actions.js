import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import {
  GET_CENTER_LIST,
  GET_CENTER_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const getCenter = () => {
  return {
    type: GET_CENTER_LIST,
  };
};
const getCenterListSuccess = (payload) => {
  return {
    type: GET_CENTER_LIST_SUCCESS,
    payload: payload,
  };
};
export const getCenterApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    console.log("Token", token);
    dispatch(getCenter());
    let result = await getApi("centre", {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    dispatch(getCenterListSuccess(result.result));
  } catch (error) {}
};

export const addCenterApi = (data, addToast, navigation) => async (
  dispatch
) => {
  try {
    dispatch(getCenter());
    let token = localStorage.getItem("token");
    let result = await postApi("centre/add", data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("Ste ajouter avec sucess", { appearance: "success" });
      dispatch(getCenterApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};
export const EditCenterApi = (id, data, addToast) => async (dispatch) => {
  try {
    dispatch(getCenter());
    let token = localStorage.getItem("token");
    let result = await updateApi("centre/edit/" + id, data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("Ste ajouter avec sucess", { appearance: "success" });
      dispatch(getCenterApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};

export const deleteCenterApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await deleteApi("centre/delete/" + id, {
      headers: { "access-token": token },
    });
    if (result) {
      dispatch(getCenterApi());
    }
  } catch (error) {}
};
