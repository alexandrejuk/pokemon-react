import React, { Component } from 'react';
import './index.css';

class ButtonSearch extends Component {
  state = {}
  render() { 
    const { buttonName } = this.props;
    return (  
      <button className="button-search">
        <div className="button-content">
          {buttonName}
          <img src="http://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go.png" alt="" />
        </div>
      </button>
    )
  }
}
 
export default ButtonSearch;