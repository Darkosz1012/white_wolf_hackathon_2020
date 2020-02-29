import { LOGIN } from './types';
import secret from '../private/password.json';



export const login = (login, password) => dispatch => {
  fetch('https://white-wolf.herokuapp.com/user/one', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'username': `${login}`,
      'password': `${password}`
    },
    referrerPolicy: 'no-referrer',
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
