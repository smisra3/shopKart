import { takeLatest, put } from "redux-saga/effects";

export default function* watchProductInfoClick() {
  yield takeLatest('MORE_INFO', loadMoreItemInfo);
}

function* loadMoreItemInfo(props) {
  yield put({ type: 'FETCHED_MORE_INFO', payload: { image: props.payload.image, itemName: props.payload.heading, price: props.payload.price, id: props.payload.id } });
}