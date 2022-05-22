import {
  GET_DOMAIN_LIST,
  GET_DOMAIN_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const domainInitState = {
  entities: [],
  actionsLoading: false,
  listLoading: false,
};

const domainReducer = (state = domainInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_DOMAIN_LIST:
      return { ...state, listLoading: true };
    case GET_DOMAIN_LIST_SUCCESS:
      return { ...state, listLoading: false, entities: payload };

    default:
      return state;
  }
};

export default domainReducer;
