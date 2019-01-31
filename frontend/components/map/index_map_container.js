import { connect } from 'react-redux';
import IndexMap from './index_map';
import { withRouter } from 'react-router-dom';




const msp = (state, ownProps) => {
  let mapCenter;
  let mapSpots;
  const { spots, indexItems } = state.entities;
  if (indexItems.length >= 1) {
    let firstSpot = spots[indexItems[0]];
    mapCenter = {lat: firstSpot.lat, lng: firstSpot.lng};
    mapSpots = indexItems.map(id => spots[id]);
  } else {
    mapCenter = {};
    mapSpots = [];
  }
  return {
    mapCenter,
    spots: mapSpots
  };
};

export default withRouter(connect(msp)(IndexMap));