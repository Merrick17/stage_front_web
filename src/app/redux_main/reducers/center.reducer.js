import {
  GET_CENTER_LIST,
  GET_CENTER_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const centerInitState = {
  entities: [],
  actionsLoading: false,
  listLoading: false,
};

const centerReducer = (state = centerInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_CENTER_LIST:
      return { ...state, listLoading: true };
    case GET_CENTER_LIST_SUCCESS:
      return { ...state, listLoading: false, entities: payload };

    default:
      return state;
  }
};

export default centerReducer;
