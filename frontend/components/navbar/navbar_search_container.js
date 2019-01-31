import { connect } from "react-redux";
import NavBarSearch from "./navbar_search";
import { fetchSpots } from "../../actions/spots_actions";
import { withRouter } from 'react-router-dom';
import { clearParams } from "../../actions/search_actions";

const msp = (state, ownProps) => {
  return {};
}

const mdp = dispatch => {
  return {
    fetchSpots: (params) => dispatch(fetchSpots(params)),
    clearParams: () => dispatch(clearParams())
  }
}

export default withRouter(connect(msp, mdp)(NavBarSearch));