let initialState = {
  cartDetails: {
    cartItems: [],
    cartTotal: ''
  }
};

const cartReducer = (state = initialState, action) => {
  let newState = {},
    newObj = {};
  if (!JSON.parse(window.sessionStorage.getItem('cartList')))
    window.sessionStorage.setItem('cartList', JSON.stringify(state));
  switch (action.type) {
    case 'ADDED_TO_CART': {
      newState = JSON.parse(window.sessionStorage.getItem('cartList'));
      newObj.title = action.payload.title;
      newObj.price = action.payload.price;
      newObj.id = action.payload.id;
      newObj.count = 1;
      newObj.amount = newObj.count * newObj.price;
      newState.cartDetails.cartItems.push(newObj)
      newState.cartDetails.cartTotal = newState.cartDetails.cartItems.reduce((prev, cur) => Number(prev) + Number(cur.price), 0);
      window.sessionStorage.setItem('cartList', JSON.stringify(newState));
      break;
    }
    case 'REMOVED_ITEM_FROM_CART': {
      newState = {
        ...state
      };
      newState.cartDetails.cartItems = action.payload;
      newState.cartDetails.cartTotal = newState.cartDetails.cartItems.reduce((prev, cur) => Number(prev) + Number(cur.price), 0);
      window.sessionStorage.setItem('cartList', JSON.stringify(newState));
      break;
    }
    case 'CART_CLEARED': {
      newState = {
        ...state,
        cartDetails: {
          cartItems: [],
          cartTotal: ''
        }
      }
      window.sessionStorage.setItem('cartList', JSON.stringify(newState));
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
};

export default cartReducer;