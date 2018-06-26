import React, { Component } from 'react';
import './index.css';
import ButtonSearch from '../button-search';

class InputSearch extends Component {
  state = {}
  render() { 
    return ( 
      <div className="searchPokemon">
        <input name="search" type="text" placeholder="Digite sua busca aqui!" />
        <ButtonSearch buttonName='Pesquisar' />
      </div>
     )
  }
}
 
export default InputSearch;