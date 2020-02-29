import React from 'react';
import './styles/app.scss';

import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Page from './layout/Page';
import Footer from './layout/Footer';

// REDUX STUFF

import { Provider } from 'react-redux';
import store from './store';

// SOCKET

// import {login} from './actions/loginActions';
import {setUser} from './actions//userActions';
// import io from 'socket.io';
// import openSocket from 'socket.io-client';



// const url = "https://white-wolf.herokuapp.com/";
// const socket = openSocket(url);
// // const socket = new WebSocket(url);
// // const socket = io().connect(url);
// socket.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
// socket.onopen = e => {
//   console.log(e);
//   socket.send(JSON.stringify({
//     login: "login",
//     password: "password",
//     type: "login"
//   }));
// }

// socket.onmessage = e => {
//   console.log("e: ", e);
//   const data = JSON.parse(e.data);
//   console.log(data);
//   switch(data.type) {
//     case "login":
//       setUser(data.user);
//       break;
//     case "notification":
//       console.log(data);
//       break;
//     default:
//       break;
//   }
// }


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <nav>
            <Navigation />
          </nav>
          <main>
              <Page />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
