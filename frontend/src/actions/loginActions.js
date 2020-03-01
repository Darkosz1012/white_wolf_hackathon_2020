import { LOGIN } from './types';
import secret from '../private/password.json';



export const login = (login, password) => dispatch => {
  fetch(`https://white-wolf.herokuapp.com/user/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      username: login,
      password
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return dispatch({
        type: LOGIN,
        payload: data
      });
    }
  );
};
