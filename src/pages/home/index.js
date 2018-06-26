import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

import Header from '../../components/header';
import Main from '../../components/main';


class Home extends Component {

  pokemons = [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image: 'https://i.pinimg.com/originals/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff.jpg',
    },
    {
      id: 2,
      name: 'Pikachu',
      type: 'fash',
      image: 'https://www.kumulos.com/wp-content/uploads/2013/10/pikachu-6.png',
    },
    {
      id: 3,
      name: 'Meowth',
      type: 'leaf',
      image: 'https://www.pokegoking.com/wp-content/uploads/Meowth-300x300.png',
    },
    {
      id: 4,
      name: 'Clefairy',
      type: 'leaf',
      image: 'https://orig00.deviantart.net/a269/f/2013/259/e/9/fancy_clefairy_by_kiss_the_iconist-d6mk2lo.png',
    },
  ];

  typePokemons = [
    { id: 1, type: 'leaf', icon: 'fa fa-leaf' },
    { id: 2, type: 'fire', icon: 'fa fa-free-code-camp' },
    { id: 3, type: 'water', icon: 'fa fa-tint' },
    { id: 4, type: 'fash', icon: 'fa fa-bolt' },
  ]

  constructor(props){
    super(props);
    this.state = {
      search : '',
      pokemons: this.pokemons,
      typePokemons: this.typePokemons,
    };

    this.fetcthItems = this.fetcthItems.bind(this);
  }

  fetcthItems() {
    return axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/`)
      .then(response => response.data.results)
      .then(pokemons => JSON.stringify(pokemons))
      .then(pokemons => this.setState({ pokemons }));
  }
  
  searchPokemon(event) {
    // this.setState({ search: event.target.value })
    console.log('ola');
  }

  render() {    
    const { pokemons, typePokemons } = this.state;
    return (
      <div>
        <Header />
        <Main pokemons={pokemons} typePokemons={typePokemons}/>
      </div>
    );
  }
}

export default Home;
