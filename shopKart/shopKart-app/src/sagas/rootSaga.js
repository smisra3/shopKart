import { call, all, put } from "redux-saga/effects";

import watchSignIn from './signInSaga';
import watchSignOut from './signOutSaga';
import watchInitData from './initDataSaga';
import watchSignUp from './signUpSaga';
import watchProductInfoClick from './productInfoSaga';
import watchAddToCart from './addToCartSaga';
import watchRemoveFromCart from './removeFromCartSaga';
import watchClearCart from './clearCartSaga';

export default function* rootSaga() {
  try {
    yield all([
      call(watchSignIn),
      call(watchSignOut),
      call(watchInitData),
      call(watchSignUp),
      call(watchProductInfoClick),
      call(watchAddToCart),
      call(watchRemoveFromCart),
      call(watchClearCart)
    ]);
  } catch (error) {
    yield put({ type: 'SHOW_ERROR_MESSAGE', payload: error });
  }
}
