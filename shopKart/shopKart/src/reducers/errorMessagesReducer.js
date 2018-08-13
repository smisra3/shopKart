let errorMessages = [];

const errorMessagesReducer = (state = errorMessages, action) => {
  let newState = [];
  switch (action.type) {
    case 'SHOW_ERROR_MESSAGE': {
      newState.push(action.payload.message);
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
};

export default errorMessagesReducer;