const offreInitState = {
  entities: [],
  loading: false,
};
const offreReducer = (state = offreInitState, action) => {
  let { payload, type } = action;
  switch (type) {
    case "GET_OFFRE_LIST":
      return { ...state, loading: true };
    case "GET_OFFRE_LIST_SUCCESS":
      return { ...state, loading: false, entities: payload };

    default:
      return state;
  }
};

export default offreReducer;
