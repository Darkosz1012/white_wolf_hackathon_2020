import React from 'react';
import '../styles/components/login.scss';
import io from 'socket.io'

export default class LoginComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password:''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;    
        this.setState({
          [name]: value
        });
      }
  
    handleSubmit(event) {
      // alert(JSON.stringify(this.state));
      event.preventDefault();
      var socket = io().connect("http://localhost:3000/");
      socket.emit('login', state);
      io.on('connection', function(socket){
        socket.on('login', function(msg){
          console.log('message: ' + msg);
        });
      });
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="loginForm">
          <label>
            Login:
            <input name="username" type="text"  onChange={this.handleInputChange}/>
          </label>
          <label>
            Password:
            <input name="password" type="password"  onChange={this.handleInputChange}/>
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      );
    }
  }