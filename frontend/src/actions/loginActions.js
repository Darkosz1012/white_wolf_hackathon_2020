import { LOGIN } from './types';
import secret from '../private/password.json';



export const login = (login, password) => dispatch => {
  console.log('login try');
  console.log(login, password);
  console.log(login === secret.login, password === secret.password);
  if (login !== secret.login || password !== secret.password) {
    return;
  }
  console.log("logged");
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => dispatch({
      type: LOGIN,
      payload: data
    })
  );
};
