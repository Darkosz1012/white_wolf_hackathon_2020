import React from 'react';
import logo from '../images/logo.png';
import '../styles/layout/header.scss';

const Header = () => {

  return(
    <div className="header">
      <img src={logo} alt="logo" id="logo"/>
      <h2>App name</h2>
    </div>
  );
}

export default Header;