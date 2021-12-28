import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);

export default CollectionPageContainer;
