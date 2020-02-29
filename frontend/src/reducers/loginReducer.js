import { LOGIN } from '../actions/types';

const initialState = {
  isLogged: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const data = action.payload;
      return {
        ...state,
        isLogged: data.success,
        user: data.user
      };
    default:
      return state;
  }
}