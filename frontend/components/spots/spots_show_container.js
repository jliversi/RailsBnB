import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spots_actions';
import SpotsShow from './spots_show';

const msp = (state, ownProps) => {

  const spot = state.entities.spots[ownProps.match.params.spotId];
  const photos = spot.photos ? spot.photos.map(id => state.entities.photos[id]) : null;
  const reviews = spot.reviews ? spot.reviews.map(id => state.entities.reviews[id]) : null; 
  const amenities = spot.amenities ? spot.amenities.map(id => state.entities.amenities[id]) : null; 
  const bookings = spot.bookings ? spot.bookings.map(id => state.entities.bookings[id]) : null; 
  
  return {
    spot,
    photos,
    reviews,
    amenities,
    bookings
  };
};

const mdp = dispatch => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id))
  };
};

export default connect(msp, mdp)(SpotsShow);