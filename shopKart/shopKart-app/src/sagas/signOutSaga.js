import { takeLatest, put } from "redux-saga/effects";

export default function* watchSignOut() {
  yield takeLatest('LOGOUT_USER', logOutUser);
}

function* logOutUser() {
  window.sessionStorage.removeItem('userProfile');
  window.location.pathname = '/logout';
  yield put({ type: 'USER_LOGGED_OUT' });
  yield put({ type: 'CLEAR_CART' });
}
