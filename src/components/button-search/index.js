import React, { Component } from 'react';
import iconSearch from '../../assets/imgs/icon-search.png'
import './index.css';

class ButtonSearch extends Component {
  render() { 
    const { buttonName } = this.props;
    return (  
      <button className="button-search">
        <div className="button-content">
          {buttonName}
          <img src={iconSearch} alt="" />
        </div>
      </button>
    )
  }
}
 
export default ButtonSearch;