import React, {Component} from 'react';
import logo from '../images/logo.png'

export default class MobileHeader extends Component {
  render() {
    return (
      <div id="mobileheader">
        <header>
          <img src={logo} alt="logo"/>
          <span>ReactNews</span>
        </header>
      </div>
    );
  } 
}