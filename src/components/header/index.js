import React, { Component } from 'react';
import './index.css';

import InputSearch from '../input-search';
import Logo from '../logo';

class Header extends Component {
  state = {}
  render() { 
    return (  
      <div className="header">
        < Logo />
        <InputSearch />
      </div>
    )
  }
}
 
export default Header;