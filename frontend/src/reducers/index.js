import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

export default combineReducers({
  mock: mockReducer
});