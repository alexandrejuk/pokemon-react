import React, { Component } from 'react';
import './index.css';
import ButtonSearch from '../button-search';

class InputSearch extends Component {
  state = {}
  render() { 
    return ( 
      <div className="searchPokemon">
        <input name="search" type="text" placeholder="Search Pokemon" />
        <ButtonSearch buttonName='Search' />
      </div>
     )
  }
}
 
export default InputSearch;