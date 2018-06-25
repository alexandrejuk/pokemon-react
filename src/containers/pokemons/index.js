import React, { Component } from 'react';
import './index.css';

import PokemonCard from '../../components/pokemon-card';

class Pokemons extends Component {
  render() { 
    const { pokemons, typePokemons } = this.props;
    return (
      <div className="pokemons">
        <PokemonCard pokemons={pokemons} typePokemons={typePokemons}/>
      </div>
    )
  }
}
 
export default Pokemons;