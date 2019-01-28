import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowMap from './show_map';

const msp = (state, ownProps) => {
  let spot = state.entities.spots[ownProps.match.params.spotId];
  const mapCenter = {lat: spot.lat, lng: spot.lng};
  return {
    mapCenter,
    spot
  };
};

export default withRouter(connect(msp)(ShowMap));

