import { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';

export default combineReducers({
  users: usersReducer
});
