import { merge } from 'lodash';
import { RECEIVE_SPOTS } from '../../actions/spots_actions';


const indexReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots.indexItems;
    default:
      return state;
  }
};

export default indexReducer; 