import { all, call } from "redux-saga/effects";

import { shopSages } from "../shop/shop.sagas";
import { userSagas } from "../user/user.sagas";
import { cartSagas } from "../cart/cart_sagas";
// This rootSaga is used so that we can put all the sagas in here and it will run. No need to specifiy each sagaMiddleware.run from store.js
export default function* rootSaga() {
  // all allows us to run all sagas simultaniuosly. No need to wait for one after another.
  yield all([call(shopSages), call(userSagas), call(cartSagas)]);
}
