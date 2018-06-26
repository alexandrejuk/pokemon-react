import React, { Component } from 'react';
import logo from '../../assets/imgs/logo.png';
import './index.css';

class Logo extends Component {
  render() { 
    return ( 
      <div className="logo">
        <img src={logo} alt="" />
      </div>
     )
  }
}
 
export default Logo;