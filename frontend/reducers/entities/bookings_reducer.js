import { merge } from 'lodash';
import { RECEIVE_SPOT, RECEIVE_SPOTS } from '../../actions/spots_actions';


const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, action.spot.bookings);
    case RECEIVE_SPOTS:
      if (action.spots.bookings) {
        return action.spots.bookings;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default bookingsReducer; 