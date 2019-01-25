import { merge } from 'lodash';
import { RECEIVE_SPOT } from '../../actions/spots_actions';


const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, action.spot.reviews);
    default:
      return state;
  }
};

export default reviewsReducer; 