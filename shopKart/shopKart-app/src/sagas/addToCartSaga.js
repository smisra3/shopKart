import { takeLatest, put } from "redux-saga/effects";

function* watchAddToCart() {
  yield takeLatest('ADD_TO_CART', addTocart);
}

function* addTocart(props) {
  yield put({ type: 'ADDED_TO_CART', payload: { title: props.payload.heading || props.payload.itemName, price: props.payload.price, count: props.payload.count || 1, amount: props.payload.price, id: props.payload.id } });
}

export default watchAddToCart
