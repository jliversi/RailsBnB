import { merge } from 'lodash';
import { RECEIVE_SPOTS } from '../../actions/spots_actions';
import { CLEAR_PARAMS } from '../../actions/search_actions';


const indexReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots.indexItems;
    case CLEAR_PARAMS:
      return [];
    default:
      return state;
  }
};

export default indexReducer; 