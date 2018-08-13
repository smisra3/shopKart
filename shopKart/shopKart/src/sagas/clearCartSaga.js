import { takeLatest, put } from "redux-saga/effects";

function* watchClearCart() {
  yield takeLatest('CLEAR_CART', clearShoppingCart);
}

function* clearShoppingCart() {
  yield put({ type: 'CART_CLEARED' });
}

export default watchClearCart;
