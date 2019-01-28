import { connect } from 'react-redux';
import ShowPhotos from './show_photos';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId];
  const photos = ownProps.photos;
  return {
    photos,
    spot
  };
};

export default withRouter(connect(msp)(ShowPhotos));