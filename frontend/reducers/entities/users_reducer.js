import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_SPOT } from '../../actions/spots_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_SPOT:
      return merge({}, state, { [action.spot.host.id]: action.spot.host });
    default:
      return state;
  }
};

export default usersReducer;
