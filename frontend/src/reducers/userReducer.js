import { FETCH_USERS, SET_USER, ADD_USER } from '../actions/types';

const initialState = {
  data: [],
  logged: {},
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
      console.log(action.payload);
      return {
        ...state,
        isLogged: true,
        logged: action.payload.data
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