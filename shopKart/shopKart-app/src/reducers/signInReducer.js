const signInReducer = (state = {
  userProfile: {
    accessToken: '',
    userName: ''
  }
}, action) => {
  let newState;
  switch (action.type) {
    case 'SIGN_IN_FORM_VALUE_TOUCHED': {
      newState = {
        ...state,
      };
      if(!newState.signInForm)
        newState.signInForm = {};
      action.payload.name === 'email' ? newState.signInForm.email = action.payload.value : newState.signInForm.password = action.payload.value; 
      break;
    }
    case 'SIGN_IN_RESPONSE': {
      newState = {
        ...state,
      };
      newState.userProfile = {
        accessToken: action.payload.accessToken,
        userName: action.payload.userProfile.fName + ' ' + action.payload.userProfile.lName
      };
      window.sessionStorage.setItem('userProfile', JSON.stringify(newState.userProfile));
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
};

export default signInReducer;