import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (stage) => stage.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShop], (collections) => collections[collectionUrlParam])
);