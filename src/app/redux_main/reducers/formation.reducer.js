import {
  GET_FORMATION_LIST,
  GET_formation_LIST,
  GET_FORMATION_LIST_SUCCESS,
  GET_formation_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const formationInitState = {
  entities: [],
  actionsLoading: false,
  listLoading: false,
};

const formationReducer = (state = formationInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_FORMATION_LIST:
      return { ...state, listLoading: true };
    case GET_FORMATION_LIST_SUCCESS:
      return { ...state, listLoading: false, entities: payload };

    default:
      return state;
  }
};

export default formationReducer;
