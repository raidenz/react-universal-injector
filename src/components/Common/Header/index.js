import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-part">
          <img src={logo} className="logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="sample-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
