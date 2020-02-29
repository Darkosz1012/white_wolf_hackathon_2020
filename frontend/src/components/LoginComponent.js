import React from 'react';


export default class LoginComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        login: '',
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
      alert(JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Login:
            <input name="login" type="text"  onChange={this.handleInputChange}/>
          </label>
          <label>
            Password:
            <input name="password" type="password"  onChange={this.handleInputChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }