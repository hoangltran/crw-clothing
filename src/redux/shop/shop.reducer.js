import ShopActionTypes from "./shop.types";

const INITIAL_STAGE = {
  collections: [],
};

const shopReducer = (state = INITIAL_STAGE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
