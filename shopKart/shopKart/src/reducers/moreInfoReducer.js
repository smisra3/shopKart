const initialState = {
  moreInfoItem: {}
};

const moreInfoReducer = (state = initialState, action) => {
  let newState, newObj;
  switch (action.type) {
    case 'FETCHED_MORE_INFO': {
      newObj = {
        image: action.payload.image,
        itemName: action.payload.itemName,
        price: action.payload.price,
        id: action.payload.id
      }
      newState = {
        ...state,
        moreInfoItem: newObj
      };
      break;
    }
    default: {
      newState = {
        ...state,
        moreInfoItem: {}
      };
      break;
    }
  }
  return newState;
};

export default moreInfoReducer;