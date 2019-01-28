import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowMap from './show_map';

const msp = (state, ownProps) => {

  let spot = state.entities.spots[ownProps.match.params.spotId];
  const mapCenter = spot ? {lat: spot.lat, lng: spot.lng} : null;
  return {
    mapCenter,
    spot
  };
};

export default withRouter(connect(msp)(ShowMap));

