import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      search : '',
      pokemons: [],
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
    this.setState({ search: event.target.value })
  }

  render() {    
    const { pokemons, search } = this.state;
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
          <div className="pokemons">
            <div className="pokemon">
              <img src="https://i.pinimg.com/originals/79/d9/7c/79d97cd68801eb29a4a5a33e208fb2ff.jpg" alt="" />
              <div className="pokemon-details">
                <h2>Charmander</h2>
                <h3 className="species-title">Species</h3>
                <div className="species">
                  <i className="fa fa-bolt" aria-hidden="true" />
                  <i className="fa fa-leaf" aria-hidden="true" />
                  <i className="fa fa-tint" aria-hidden="true" />
                  <i className="fa fa-free-code-camp actived" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="pokemon">
              <img src="https://www.kumulos.com/wp-content/uploads/2013/10/pikachu-6.png" alt="" />
              <div className="pokemon-details">
                <h2>Pikachu</h2>
                <h3 className="species-title">Species</h3>
                <div className="species">
                  <i className="fa fa-bolt actived" aria-hidden="true" />
                  <i className="fa fa-leaf" aria-hidden="true" />
                  <i className="fa fa-tint" aria-hidden="true" />
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="pokemon">
              <img src="https://www.pokegoking.com/wp-content/uploads/Meowth-300x300.png" alt="" />
              <div className="pokemon-details">
                <h2>Meowth</h2>
                <h3 className="species-title">Species</h3>
                <div className="species">
                  <i className="fa fa-bolt" aria-hidden="true" />
                  <i className="fa fa-leaf actived" aria-hidden="true" />
                  <i className="fa fa-tint" aria-hidden="true" />
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="pokemon">
              <img src="https://orig00.deviantart.net/a269/f/2013/259/e/9/fancy_clefairy_by_kiss_the_iconist-d6mk2lo.png" alt="" />
              <div className="pokemon-details">
                <h2>Clefairy</h2>
                <h3 className="species-title">Species</h3>
                <div className="species">
                  <i className="fa fa-bolt" aria-hidden="true" />
                  <i className="fa fa-leaf actived" aria-hidden="true" />
                  <i className="fa fa-tint" aria-hidden="true" />
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
