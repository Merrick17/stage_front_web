import { GET_STE_LIST, GET_STE_LIST_SUCCESS } from "../actionTypes/actionTypes";

const initSteState = {
  entities: [],
  actionsLoading: false,
  listLoading: false,
};

const steReducer = (state = initSteState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_STE_LIST:
      return { ...state, actionsLoading: true };
    case GET_STE_LIST_SUCCESS:
      return { ...state, actionsLoading: false, entities: payload };

    default:
      return state;
  }
};
export default steReducer;
