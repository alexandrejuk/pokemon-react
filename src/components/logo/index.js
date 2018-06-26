import React, { Component } from 'react';
import './index.css';

class Logo extends Component {
  state = {}
  render() { 
    return ( 
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
      </div>
     )
  }
}
 
export default Logo;