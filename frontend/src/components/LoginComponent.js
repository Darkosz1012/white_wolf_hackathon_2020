import React from 'react';
import '../styles/components/login.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';


class LoginComponent extends React.Component {
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
      // alert(JSON.stringify(this.state));
      event.preventDefault();
      this.props.login();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="loginForm">
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

  LoginComponent.propTypes = {
    login: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    login: PropTypes.func.isRequired
  }); 
  
  export default connect(mapStateToProps, {login})(LoginComponent);