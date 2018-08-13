import { takeLatest, put, select } from "redux-saga/effects";

function* watchRemoveFromCart() {
  yield takeLatest('REMOVE_FROM_CART', removeItemFromCart);
}

function* removeItemFromCart(props) {
  let state = yield select();
  let cartItemsArray = state.cartReducer.cartDetails.cartItems;
  if (cartItemsArray.length) {
    cartItemsArray.find((element, index, arr) => {
      if (element.id === props.payload.id) {
        arr.splice(index, 1);
        return true;
      };
      return false;
    });
  }
  yield put({ type: 'REMOVED_ITEM_FROM_CART', payload: cartItemsArray });
}

export default watchRemoveFromCart;
