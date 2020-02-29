import { combineReducers } from 'redux';
import mockReducer from './mockReducer';
import usersReducer from './userReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  mock: mockReducer,
  users: usersReducer,
  login: loginReducer
});