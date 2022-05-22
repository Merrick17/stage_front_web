import {
  GET_USER_LIST_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from "../actionTypes/actionTypes";

const initState = {
  loading: false,

  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  customerForEdit: {},
  entities: [],
  ste: localStorage.getItem("ste")
    ? JSON.parse(localStorage.getItem("ste"))
    : null,
};

const userReducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        userInfo: payload.user,
        ste: payload.ste,
      };
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, userInfo: payload };
    case GET_USER_LIST_SUCCESS:
      return { ...state, loading: false, entities: payload };
    case LOGOUT_USER:
      return { ...state, userInfo: null, token: "" };
    default:
      return state;
  }
};

export default userReducer;
