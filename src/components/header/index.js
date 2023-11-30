import React, { Component } from 'react';
import './index.css';

import Logo from '../logo';

class Header extends Component {
  render() { 
    return (  
      <div className="header">
        < Logo />
        {/* <InputSearch /> */}
      </div>
    )
  }
}
 
export default Header;