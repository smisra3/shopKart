import { combineReducers } from "redux";

import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import globalReducer from './globalReducer';
import cartReducer from './cartReducer';
import moreInfoReducer from './moreInfoReducer';
import logOutReducer from './logOutReducer';
import errorMessagesReducer from './errorMessagesReducer';

const rootReducer = combineReducers({
  signInReducer,
  signUpReducer,
  globalReducer,
  cartReducer,
  moreInfoReducer,
  logOutReducer,
  errorMessagesReducer
});
export default rootReducer;