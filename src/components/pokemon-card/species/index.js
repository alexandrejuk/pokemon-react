import React, { Component } from 'react';
import { contains } from 'ramda';
import './index.css';

class Species extends Component {

  render() { 
    const { type: pokemonType, typePokemons } = this.props;

    const noActived = ({ icon, id}) => <i className={icon} aria-hidden="true" key={id}></i>;  
    const isActived = ({ icon, id}) => <i className={icon + ' actived'} aria-hidden="true" key={id}></i>;

    const CheckedType = type => contains(type, pokemonType);
    const getTypes = ({ types }) => types.filter(CheckedType);
    const newType = species => types => ({ ...species, types });
    
    const typesPokemon = typePokemons.map(species => {
      const foundType = newType(species)(getTypes(species));
      if(foundType.types.length > 0) return isActived(foundType);
      return noActived(species);
    });
    return (<div className="species">{typesPokemon}</div>);
  }

}
 
export default Species;