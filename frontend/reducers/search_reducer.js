import { merge } from 'lodash';
import { RECEIVE_PARAMS, CLEAR_PARAMS, RECEIVE_ONE_PARAM } from '../actions/search_actions';


const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PARAMS:
      return merge({}, state, action.params)
    case CLEAR_PARAMS:
      return {};
    default:
      return state;
  }
};

export default searchReducer; 