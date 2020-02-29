import { FETCH_USER } from './types';

export const fetchUser = (id) => dispatch => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user.results[0]
    })
  );
};
