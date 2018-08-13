const signUpReducer = (state = {
  userCreatedSuccessfully: ''
}, action) => {
  let newState;
  switch (action.type) {
    case 'SIGN_UP_FORM_VALUE_TOUCHED': {
      newState = {
        ...state,
      };
      if (!newState.signUpForm)
        newState.signUpForm = {};
      if (action.payload.name === 'fName')
        newState.signUpForm.fName = action.payload.value;
      else if (action.payload.name === 'lName')
        newState.signUpForm.lName = action.payload.value;
      else if (action.payload.name === 'password')
        newState.signUpForm.password = action.payload.value;
      else if (action.payload.name === 'username')
        newState.signUpForm.userName = action.payload.value;
      else if (action.payload.name === 'email')
        newState.signUpForm.email = action.payload.value;
      break;
    }
    case 'SIGN_UP_RESPONSE': {
      newState = {
        ...state,
      };
      newState.userCreatedSuccessfully = 'User Created Successfully';
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
};

export default signUpReducer;