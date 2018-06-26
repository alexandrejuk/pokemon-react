import React, { Component } from 'react';
import './index.css';

import loadPokeball from '../../assets/imgs/load-pokeball.gif'

class Loading extends Component {
  render() { 
    return (
      <div className="pokeball-load">
        <img src={loadPokeball} alt="loading..." />   
        <h1>Loading...</h1>  
      </div>
    )
  }
}
 
export default Loading;