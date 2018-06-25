import React, { Component } from 'react';
import './index.css';

class PokemonCard extends Component {
  render() { 
    const { pokemons, typePokemons } = this.props;
    return pokemons.map(pokemon => {
      return (
        <div className="pokemon" key={pokemon.id}>
          <img src={pokemon.image} alt="" />
          <div className="pokemon-details">
            <h2>{pokemon.name}</h2>
            <h3 className="species-title">Species</h3>
            <div className="species">
              {typePokemons.map(typePokemon => {
                if (typePokemon.type === pokemon.type ) return <i className={typePokemon.icon + ' actived'} aria-hidden="true" key={typePokemon.id}></i>
                return <i className={typePokemon.icon} aria-hidden="true" key={typePokemon.id}></i>
              })}
            </div>
          </div>
        </div>
      )
    })
  }
}
 
export default PokemonCard;