import React, { Component } from 'react';
import { contains } from 'ramda';
import './index.css';

class Species extends Component {

  render() { 
    const { type: pokemonType, typePokemons } = this.props;
    const isActived = 
      typePokemons.map(species => {
        const foundType = {...species, type: species.type.filter(specie => contains(specie, pokemonType)) };
        if(foundType.type.length > 0) {
          return <i className={foundType.icon + ' actived'} aria-hidden="true" key={foundType.id}></i> 
        }
        return <i className={species.icon} aria-hidden="true" key={species.id}></i>
      })
    return (<div className="species">{isActived}</div>);
  }
}
 
export default Species;