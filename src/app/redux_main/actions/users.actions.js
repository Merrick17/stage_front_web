import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import {
  GET_USER_LIST_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from "../actionTypes/actionTypes";

const registerUser = () => {
  return {
    type: REGISTER_USER,
    payload: null,
  };
};

const registerUserSuccess = (data) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data,
  };
};

export const registerUserApi = (body, addToast) => async (dispatch) => {
  try {
    dispatch(registerUser());
    let result = await postApi("users/register/", body);
    if (result.success) {
      console.log("Result LOGIn", result);
      addToast("Success veuillez vous connecter", { appearance: "success" });
    } else {
      addToast("Erreur veuillez resssayer", { appearance: "error" });
    }

    // dispatch(registerUserSuccess(result));
  } catch (error) {}
};
export const addUserApi = (body, addToast) => async (dispatch) => {
  try {
    dispatch(registerUser());
    let result = await postApi("users/register/", body);
    if (result.success) {
      addToast("Utilisateur Ajouter ! ", { appearance: "success" });
      dispatch(getUserListApi());
    } else {
      addToast("Erreur veuillez resssayer", { appearance: "error" });
    }

    // dispatch(registerUserSuccess(result));
  } catch (error) {}
};
const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};
const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserApi = (body, navigator, addToast) => async (dispatch) => {
  try {
    dispatch(loginUser());
    let result = await postApi("users/login", body);
    console.log("Result", result);
    if (result.success) {
      console.log("RESULT", result.result);
      dispatch(loginUserSuccess(result.result));

      localStorage.setItem("token", result.result.token);
      localStorage.setItem("user", JSON.stringify(result.result.user));
      if (result.result.ste) {
        localStorage.setItem("ste", JSON.stringify(result.result.ste));
      }
    } else {
      addToast("Adresse ou mot de passe incorrect", { appearance: "error" });
    }
  } catch (error) {}
};
export const getUserListApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await getApi("users/", {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      dispatch({
        type: GET_USER_LIST_SUCCESS,
        payload: result.result,
      });
    }
  } catch (error) {}
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await deleteApi("users/delete/" + id, {
      headers: { "access-token": token },
    });
    console.log("Result  Delete", result);
    if (result) {
      dispatch(getUserListApi());
    }
  } catch (error) {}
};
export const switchUserState = (id, isActive) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await updateApi(
      "users/switch/" + id,
      { isActive: isActive },
      {
        headers: { "access-token": token },
      }
    );
    if (result) {
      dispatch(getUserListApi());
    }
  } catch (error) {}
};
