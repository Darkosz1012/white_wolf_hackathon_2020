import { combineReducers } from 'redux';
import mockReducer from './mockReducer';
import userReducer from './userReducer';

export default combineReducers({
  mock: mockReducer,
  user: userReducer
});