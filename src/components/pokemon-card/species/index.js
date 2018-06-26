import React, { Component } from 'react';
import './index.css';

class Species extends Component {

  renderSpeciesPokemon(type, typePokemons) {
    return typePokemons.map(
      specie => 
        (specie.type === type 
          ? <i className={specie.icon + ' actived'} aria-hidden="true" key={specie.id}></i> 
          : <i className={specie.icon} aria-hidden="true" key={specie.id}></i>)
      )
  }

  render() { 
    const { type, typePokemons } = this.props;
    return (
      <div className="species">
        { this.renderSpeciesPokemon(type, typePokemons) }
      </div>
    );
  }
}
 
export default Species;