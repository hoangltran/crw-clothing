import SHOP_DATA from "./shop.data";

const INITIAL_STAGE = {
  collections: SHOP_DATA,
};

const shopReducer = (stage = INITIAL_STAGE, action) => {
  switch (action.type) {
    default:
      return stage;
  }
};

export default shopReducer;
