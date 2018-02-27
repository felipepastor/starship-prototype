import React, {Component} from 'react';
import './App.css';

import Search from '../Search/Search'
import SearchResults from "../SearchResults/SearchResults";

import * as StarShipsAPI from '../../api/StarshipApi'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mglt: "0"
    };

    this.handleMGLTChange = this.handleMGLTChange.bind(this);
    this.handleMGLTSubmit = this.handleMGLTSubmit.bind(this);
  }

  handleMGLTChange(value) {
    this.setState({
      mglt: value
    });
  }

  handleMGLTSubmit(e) {
    try {
      e.preventDefault();

      StarShipsAPI.search().then((data => {
        this.calculateConsumableXMGLT(data);
        this.renderSearchResults(data);
      }));

    } catch (err) {
      console.error(err)
    }
  }

  calculateConsumableXMGLT(data) {
    try {
      const mgltInput = this.state.mglt;
      let numberOfDays;

      data.filter(data => {
        if (typeof data.consumables === 'string') {
          const consumable = data.consumables.split(' ');
          const consumableNumber = consumable[0];
          let calcMGLT = 0;
          
          switch (true) {
            case /week/.test(consumable[1]):
              numberOfDays = 7;
              break;
            case /month/.test(consumable[1]):
              numberOfDays = 30;
              break;
            case /year/.test(consumable[1]):
              numberOfDays = 365;
              break;
            default:
              numberOfDays = 1;
              break;
          }

          calcMGLT = (parseFloat(this.state.mglt) / ((parseFloat(consumableNumber) * parseFloat(numberOfDays)) * 24 * parseFloat(data.MGLT)));
          
          console.log(data.name, calcMGLT);
          
          if (calcMGLT)  {
               
          }
        }
      }, this)

    } catch (e) {
      throw e;
    }
  }

  renderSearchResults(response) {
    console.log(response);
  }

  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header row">
          <Search onHandleSubmit={this.handleMGLTSubmit} onMGLTChange={this.handleMGLTChange} mglt={this.state.mglt}/>
        </header>
        <section className="row">
          <SearchResults/>
        </section>
      </div>
    );
  }
}

export default App;
