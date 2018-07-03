import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

import Main from '../../components/main';
import Loading from '../../components/loading';

class Home extends Component {

  typePokemons = [
    { id: 1, types: ['Bug', 'Grass', 'Rock', 'Ground', 'Normal'], icon: 'fa fa-leaf' },
    { id: 2, types: ['Fire'], icon: 'fa fa-free-code-camp' },
    { id: 3, types: ['Poison', 'Water'], icon: 'fa fa-tint' },
    { id: 4, types: ['Electric'], icon: 'fa fa-bolt' },
    { id: 5, types: ['Ice'], icon: 'fa fa-snowflake-o'},
    { id: 6, types: ['Bug'], icon: 'fa fa-bug'},
  ]

  constructor(props){
    super(props);
    this.state = {
      search : '',
      pokemons: [],
      typePokemons: this.typePokemons,
      loading: true,
    };
    
    this.fetchPokemons();

  }

  fetchPokemons() {
    return axios.get(`http://localhost:3002/pokemons`)
      .then(response => response.data)
      .then(pokemons => this.setState({ pokemons, loading: false }))
  }
  
  searchPokemon(event) {
    console.log('ola');
  }

  render() {    
    const { pokemons, typePokemons } = this.state;
    return (
      <div className="content">
        { this.state.loading ? <Loading /> : <Main pokemons={pokemons} typePokemons={typePokemons}/> }
      </div>
    );
  }
}

export default Home;
