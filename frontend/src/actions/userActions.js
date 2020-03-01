import { FETCH_USERS, SET_USER, ADD_USER } from './types';


export const fetchUsers = (id) => dispatch => {
  fetch('https://white-wolf.herokuapp.com/user/')
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users.data
    })
  );
};

export const setUser = (user) => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user
  })
};

export const addUser = (user) => dispatch => {
  console.log("ADDING SER");
  dispatch({
    type: ADD_USER,
    payload: user
  })
};
