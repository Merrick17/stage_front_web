import { deleteApi, getApi, postApi, updateApi } from "../../utils/apiHelpers";
import {
  GET_PARTICIPATION_LIST,
  GET_PARTICIPATION_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const getparticipation = () => {
  return {
    type: GET_PARTICIPATION_LIST,
  };
};
const getparticipationListSuccess = (payload) => {
  return {
    type: GET_PARTICIPATION_LIST_SUCCESS,
    payload: payload,
  };
};
export const getparticipationApi = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    console.log("Token", token);
    dispatch(getparticipation());
    let result = await getApi("participation", {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    dispatch(getparticipationListSuccess(result.result));
  } catch (error) {}
};

export const addparticipationApi = (data, addToast) => async (dispatch) => {
  try {
    dispatch(getparticipation());
    let token = localStorage.getItem("token");
    let result = await postApi("participation/add", data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("participatione ajouter avec sucess", { appearance: "success" });
      dispatch(getparticipationApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};
export const EditparticipationApi = (id, data, addToast) => async (
  dispatch
) => {
  try {
    dispatch(getparticipation());
    let token = localStorage.getItem("token");
    let result = await updateApi("participation/edit/" + id, data, {
      headers: { "access-token": token },
    });
    console.log("Result", result);
    if (result.success) {
      addToast("Ste ajouter avec sucess", { appearance: "success" });
      dispatch(getparticipationApi());
      //navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};

export const deleteparticipationApi = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await deleteApi("participation/delete/" + id, {
      headers: { "access-token": token },
    });
    if (result) {
      dispatch(getparticipationApi());
    }
  } catch (error) {}
};


