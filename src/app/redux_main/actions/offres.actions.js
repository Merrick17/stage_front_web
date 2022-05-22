import { getApi, postApi } from "../../utils/apiHelpers";

const getOffres = () => {
  return {
    type: "GET_OFFRE_LIST",
  };
};

const getOffresListSuccess = (data) => {
  return {
    type: "GET_OFFRE_LIST_SUCCESS",
    payload: data,
  };
};

export const getOffresListApiBySte = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await getApi("offre/ste/" + id, {
      headers: {
        "access-token": token,
      },
    });
    if (result) {
      console.log("Resullt", result);
      dispatch(getOffresListSuccess(result.result));
    }
  } catch (error) {}
};

export const addOffre = (data) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    let result = await postApi("offre/add", data, {
      headers: {
        "access-token": token,
      },
    });
    if (result) {
      dispatch(getOffresListApiBySte(data.addedBy));
    }
  } catch (error) {}
};
