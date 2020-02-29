import { combineReducers } from 'redux';
import mockReducer from './mockReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  mock: mockReducer,
  user: userReducer,
  login: loginReducer
});