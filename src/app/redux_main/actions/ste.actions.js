import { deleteApi, getApi, postApi } from "../../utils/apiHelpers";
import { GET_STE_LIST, GET_STE_LIST_SUCCESS } from "../actionTypes/actionTypes";

const getSteList = () => {
  return {
    type: GET_STE_LIST,
  };
};
const getSteListSuccess = (payload) => {
  return {
    type: GET_STE_LIST_SUCCESS,
    payload: payload,
  };
};
export const getSteListApi = () => async (dispatch) => {
  try {
    dispatch(getSteList());
    let result = await getApi("ste");
    console.log("Result", result);
    dispatch(getSteListSuccess(result.result));
  } catch (error) {}
};

export const addSteApi = (data, addToast, navigation) => async (dispatch) => {
  try {
    dispatch(getSteList());
    let result = await postApi("ste/add", data);
    console.log("Result", result);
    if (result.success) {
      addToast("Ste ajouter avec sucess", { appearance: "success" });
      navigation.goBack();
    } else {
      addToast(result.result, { appearance: "danger" });
    }
  } catch (error) {}
};

export const deleteSteApi = (id) => async (dispatch) => {
  try {
    let result = await deleteApi("ste/delete/" + id);
    if (result) {
      dispatch(getSteListApi());
    }
  } catch (error) {}
};
