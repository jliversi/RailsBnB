import { connect } from "react-redux";
import SpotsIndex from "./spots_index";
import { fetchSpots } from "../../actions/spots_actions";
import { clearParams } from "../../actions/search_actions";

const msp = (state, ownProps) => {
  return {
    spots: state.entities.indexItems.map(id => state.entities.spots[id]),
    photos: state.entities.photos,
    indexItems: state.entities.indexItems,
    params: state.search
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: (params) => dispatch(fetchSpots(params)),
    clearParams: () => dispatch(clearParams())
  };
};

export default connect(msp, mdp)(SpotsIndex);

