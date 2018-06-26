import React, { Component } from 'react';
import './index.css';

import Species from './species';

class PokemonCard extends Component {
  render() { 
    const { pokemon: { image, name, type }, typePokemons } = this.props;
      return (
        <div className="pokemon">
          <img src={image} alt="" />
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