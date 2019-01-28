import { connect } from 'react-redux';
import IndexMap from './index_map';
import { withRouter } from 'react-router-dom';




const msp = (state, ownProps) => {
  let mapCenter;
  let spots;
  if (Object.keys(state.entities.spots).length >= 1) {
    let firstSpot = Object.values(state.entities.spots)[0];
    mapCenter = {lat: firstSpot.lat, lng: firstSpot.lng};
    spots = Object.values(state.entities.spots);
  } else {
    mapCenter = {};
    spots = {};
  }
  return {
    mapCenter,
    spots
  };
};

export default withRouter(connect(msp)(IndexMap));