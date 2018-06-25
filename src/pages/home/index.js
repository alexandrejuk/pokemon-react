import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

import Pokemons from '../../containers/pokemons';

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
    const { pokemons, typePokemons, search } = this.state;
    return (
      <div className="content">
        <div className="content-header">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
          </div>
          <div className="searchPokemon">
            <input name="search" type="text" value={search} onChange={this.searchPokemon.bind(this)} placeholder="Digite sua busca aqui!" />
            <button className="button-search" onClick={this.fetcthItems}>
              <div className="button-content">
                Pesquisar
                <img src="http://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png" alt="" />
              </div>
            </button>
          </div>
        </div>

        <div className="content-main">
          <Pokemons  pokemons={pokemons} typePokemons={typePokemons} />
        </div>

      </div>
    );
  }
}

export default Home;
