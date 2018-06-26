import React, { Component } from 'react';
import './index.css';
import Pokemons from '../../containers/pokemons';

class Main extends Component {
  render() { 
    const { pokemons, typePokemons } = this.props;
    return (<Pokemons pokemons={pokemons} typePokemons={typePokemons} />)
  }
}
 
export default Main;