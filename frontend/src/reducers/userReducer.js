import { FETCH_USER } from '../actions/types';

const initialState = {
  data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(action);
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}