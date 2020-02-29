import {login} from './actions/loginActions';
import {setUser} from './actions//userActions';

const url = "https://white-wolf.herokuapp.com/";
const socket = new WebSocket(url);


socket.onopen = e => {
  console.log(e);
  socket.send(JSON.stringify({
    login: "login",
    password: "password",
    type: "login"
  }));
}

socket.onmessage = e => {
  console.log("e: ", e);
  const data = JSON.parse(e.data);
  console.log(data);
  switch(data.type) {
    case "login":
      setUser(data.user);
      break;
    case "notification":
      console.log(data);
      break;
    default:
      break;
  }
}

export default socket;