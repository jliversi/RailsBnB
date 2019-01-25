import { merge } from 'lodash';
import { RECEIVE_SPOT } from '../../actions/spots_actions';


const amenitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, action.spot.amenities);
    default:
      return state;
  }
};

export default amenitiesReducer; 