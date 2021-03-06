import React, { Component } from 'react';
import './index.css';
import ButtonSearch from '../button-search';

class InputSearch extends Component {
  render() { 
    return ( 
      <div className="search">
        <input className="search-input" name="search" type="text" placeholder="Search Pokemon" />
        <ButtonSearch buttonName='Search' /> 
      </div>
     )
  }
}
 
export default InputSearch;