const initialState = {
  message: ''
};

const logOutReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'USER_LOGGED_OUT': {
      newState = {
        ...state,
        message: 'You have been successfully logged out'
      };
      break;
    }
    default: {
      newState = state;
    }
  }
  return newState;
};

export default logOutReducer;