import { connect } from "react-redux";
import SpotsIndex from "./spots_index";
import { fetchSpots } from "../../actions/spots_actions";

const msp = (state, ownProps) => {
  return {
    spots: state.entities.indexItems.map(id => state.entities.spots[id]),
    photos: state.entities.photos
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(msp, mdp)(SpotsIndex);

