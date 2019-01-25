import { merge } from 'lodash';
import { RECEIVE_SPOT, RECEIVE_SPOTS } from '../../actions/spots_actions';


const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
      return merge({}, state, action.spot.spot);
    case RECEIVE_SPOTS:
      return action.spots.spots;
    default:
      return state;
  }
};

export default spotsReducer; 