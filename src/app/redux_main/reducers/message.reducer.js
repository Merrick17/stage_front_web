const messageInitState = {
  messageList: [],
  showModal: false,
};

const messageReducer = (state = messageInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "SHOW_DISCUSSION":
      return { ...state, showModal: true };
    case "HIDE_DISCUSSION":
      return { ...state, showModal: false };

    default:
      return state;
  }
};
export default messageReducer;
