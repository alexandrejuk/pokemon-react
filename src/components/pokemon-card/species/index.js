import React, { Component } from 'react';
import { contains } from 'ramda';
import './index.css';

class Species extends Component {

  render() { 
    const { type: pokemonType, typePokemons } = this.props;

    const noActived = ({ icon, id}) => <i className={icon} aria-hidden="true" key={id}></i>;  
    const isActived = ({ icon, id}) => <i className={icon + ' actived'} aria-hidden="true" key={id}></i>;

    const checkedType = type => contains(type, pokemonType);
    const getTypes = ({ types }) => types.filter(checkedType);
    const newType = (species) => ({ ...species, types: getTypes(species) });
    const compare = (foundType, species) => foundType.types.length > 0 ? isActived(foundType) : noActived(species);
    const typesPokemon = typePokemons.map(species => compare(newType(species), species));

    return (<div className="species">{typesPokemon}</div>);
  }

}
 
export default Species;