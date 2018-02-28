import React, {Component} from 'react';
import './App.css';

import Search from '../Search/Search'
import SearchResults from "../SearchResults/SearchResults";
import Loading from "../Loading/Loading";

import * as StarShipsAPI from '../../api/StarshipApi'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mglt: 0,
      availableStartShips: [],
      loading: false
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
      if(e) {
        e.preventDefault();
      }
      
      this.setState({
        loading: true
      });

      StarShipsAPI.search().then((data => {
        this.setState({
          loading: false
        });

        this.calculateConsumableXMGLT(data);
      }));

    } catch (err) {
      console.error(err)
    }
  }

  calculateConsumableXMGLT(data) {
    try {
      let finalStarships = data.filter(data => {
        if (typeof data.consumables === 'string') {
          const consumable = data.consumables.split(' ');
          const consumableNumber = consumable[0];
          let calcMGLT,
            numberOfDays;

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

          if (this.state.mglt !== 0) {
            calcMGLT = (parseFloat(this.state.mglt) / ((parseFloat(consumableNumber) * parseFloat(numberOfDays)) * 24 * parseFloat(data.MGLT)));
          }

          if (parseInt(calcMGLT) > 0 && !isNaN(calcMGLT)) {
            data.stopsToResupply = calcMGLT.toFixed(2);
            return data;
          }
        }
      }, this);

      return this.setState({
        availableStartShips: finalStarships
      });

    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header row justify-content-center">
          <Search onHandleSubmit={this.handleMGLTSubmit} onMGLTChange={this.handleMGLTChange} mglt={this.state.mglt}/>
        </header>
        <section className="row">
          <SearchResults starships={this.state.availableStartShips}/>
          {(this.state.loading) ? <Loading /> : ''}
        </section>
      </div>
    );
  }
}

export default App;
