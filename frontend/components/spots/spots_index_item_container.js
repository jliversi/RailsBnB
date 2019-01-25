import { connect } from "react-redux";
import SpotsIndexItem from "./spots_index_item";

const msp = (state, ownProps) => {
  return {
    spot: ownProps.spot,
    photos: state.entities.photos
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(SpotsIndexItem);

