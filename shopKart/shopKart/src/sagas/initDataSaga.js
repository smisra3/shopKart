import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

export default function* watchInitData() {
  yield takeLatest('INIT_COMP_DATA', initCompData);
}

function* initCompData(dispatch) {
  let url,
    method;
  const { component } = dispatch.payload;
  switch (component) {
    case 'productListing': {
      let { pathname } = dispatch.payload;
      url = 'http://10.207.60.225:3200/api/' + pathname;
      method = 'GET';
      break;
    }
    case 'home': {
      url = 'http://10.207.60.225:3200/api/CommonData';
      method = 'GET';
      break;
    }
    default: break;
  }
  let result = yield call(fetchList, url, method);
  if (result.status === 200 || result.length)
    yield put({ type: 'DATA_FETCHED', payload: { component, data: result.data, categoryId: dispatch.payload.categoryId } });
}


function fetchList(url, method, payload) {
  return axios({
    method: method || "GET",
    url: url,
    data: payload || ''
  })
}