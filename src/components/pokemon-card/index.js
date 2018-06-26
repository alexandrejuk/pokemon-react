import React, { Component } from 'react';
import './index.css';

import Species from './species';

class PokemonCard extends Component {
  render() { 
    const { pokemon: { img, name, type }, typePokemons } = this.props;
      return (
        <div className="pokemon">
          <img src={img} alt="pokemon" />
          <div className="pokemon-details">
            <h2>{name}</h2>
            <h3 className="species-title">Species</h3>
            <Species type={type} typePokemons={typePokemons} />
          </div>
        </div>
      )
  }
}
 
export default PokemonCard;