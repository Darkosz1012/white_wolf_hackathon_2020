import { FETCH_MOCK } from '../actions/types';

const initialState = {
  mock: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOCK:
      return {
        ...state,
        mock: action.payload.results
      };
    default:
      return state;
  }
}