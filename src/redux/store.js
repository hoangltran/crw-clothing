import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSageMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga/root-saga";

const sagaMiddleware = createSageMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
