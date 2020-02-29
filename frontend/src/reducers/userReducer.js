import { FETCH_USERS, SET_USER, ADD_USER } from '../actions/types';

const initialState = {
  data: [],
  isLogged: false,
  room: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        data: action.payload
      };
    case SET_USER:
      return {
        ...state,
        isLogged: true,
        data: action.payload
      }
    case ADD_USER:
      console.log("ad");
      const newRoom = [...state.room, action.payload]
      return {
        ...state,
        room: newRoom
      }
    default:
      return state;
  }
}