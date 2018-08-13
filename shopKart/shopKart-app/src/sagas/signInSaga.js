import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";

export default function* watchSignIn() {
  yield takeLatest('SIGN_IN_FORM_SUBMIT', makeAsyncCallForSignIn);
}

function* makeAsyncCallForSignIn() {
  var state = yield select();
  var result = yield call(fetchList, "http://10.207.60.225:3200/api/Users/login", 'POST', state.signInReducer.signInForm);
  if (result.data.state === 'success') {
    yield put({ type: 'SIGN_IN_RESPONSE', payload: result.data });
  }
}

function fetchList(url, method, payload) {
  return axios({
    method: method || "GET",
    url: url,
    data: payload || '',
    crossDomain: true
  });
}