import { merge } from 'lodash';
import { RECEIVE_SPOT, RECEIVE_SPOTS } from '../../actions/spots_actions';


const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, action.spot.photos);
    case RECEIVE_SPOTS:
      if (action.spots.photos) {
        return action.spots.photos;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default photosReducer; 