import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import {
  GET_DOMAIN_LIST,
  GET_DOMAIN_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const getdomain = () => {
  return {
    type: GET_DOMAIN_LIST,
  };
};
const getdomainListSuccess = (payload) => {
  return {
    type: GET_DOMAIN_LIST_SUCCESS,
    payload: payload,
  };
};
export const getdomainApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    console.log("Token", token);
    dispatch(getdomain());
    let result = await getApi("domain", {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    dispatch(getdomainListSuccess(result.result));
  } catch (error) {}
};

export const adddomainApi = (data, addToast) => async (dispatch) => {
  try {
    dispatch(getdomain());
    let token = localStorage.getItem("token");
    let result = await postApi("domain/add", data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("Domaine ajouter avec sucess", { appearance: "success" });
      dispatch(getdomainApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};
export const EditdomainApi = (id, data, addToast) => async (dispatch) => {
  try {
    dispatch(getdomain());
    let token = localStorage.getItem("token");
    let result = await updateApi("domain/edit/" + id, data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("Ste ajouter avec sucess", { appearance: "success" });
      dispatch(getdomainApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};

export const deletedomainApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await deleteApi("domain/delete/" + id, {
      headers: { "access-token": token },
    });
    if (result) {
      dispatch(getdomainApi());
    }
  } catch (error) {}
};
