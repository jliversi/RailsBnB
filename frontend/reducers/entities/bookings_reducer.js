import { merge } from 'lodash';
import { RECEIVE_SPOT } from '../../actions/spots_actions';


const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, action.spot.bookings);
    default:
      return state;
  }
};

export default bookingsReducer; 