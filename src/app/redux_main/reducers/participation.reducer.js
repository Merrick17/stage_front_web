import {
  GET_PARTICIPATION_LIST,
  GET_PARTICIPATION_LIST_SUCCESS,
} from "../actionTypes/actionTypes";

const participationInitState = {
  entities: [],
  loading: false,
};
const participationReducer = (state = participationInitState, action) => {
  let { payload, type } = action;
  switch (type) {
    case GET_PARTICIPATION_LIST:
      return { ...state, loading: true };
    case GET_PARTICIPATION_LIST_SUCCESS:
      return { ...state, loading: false, entities: payload };

    default:
      return state;
  }
};

export default participationReducer;
