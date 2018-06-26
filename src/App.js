import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/header';
import Home from './pages/home';
import PokemonDetail from './pages/pokemon-detail';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/pokemon-detail" component={PokemonDetail} />
      </div>
    </BrowserRouter>   
    );
  }
}

export default App;
