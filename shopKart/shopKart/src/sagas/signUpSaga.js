import { takeLatest, call, put, select } from "redux-saga/effects";
import axios from "axios";

export default function* watchSignUp() {
  yield takeLatest('SIGN_UP_FORM_SUBMIT', makeAsyncCallForSignUp);
}

function* makeAsyncCallForSignUp(payload) {
  var state = yield select();
  var result = yield call(fetchList, "http://10.207.60.225:3200/api/Users", 'POST', state.signUpForm);
  if (result.data.state === 'success')
    yield put({ type: 'SIGN_UP_RESPONSE', payload: result });
}

function fetchList(url, method, payload) {
  return axios({
    method: method || "GET",
    url: url,
    data: payload || '',
    crossDomain: true
  });
}