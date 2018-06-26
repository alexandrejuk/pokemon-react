import React, { Component } from 'react';
import './index.css';

import PokemonCard from '../../components/pokemon-card';

class Pokemons extends Component {
  render() { 
    const { pokemons, typePokemons } = this.props;
    return (
      <div className="pokemons">
        {pokemons.map(
          pokemon =>
            <PokemonCard 
              pokemon={pokemon}
              typePokemons={typePokemons} 
              key={pokemon.id} 
            />
        )}
      </div>
    )
  }
}
 
export default Pokemons;