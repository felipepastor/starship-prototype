import React, { Component } from 'react';
import './SearchResults.css';

import starWarsImg from '../../assets/images/starwars.jpg'

class SearchResults extends Component {

    render() {
        return (
            <div className="col-md-12">
              <ul>
                <li className="row list-item">
                  <div className="col-md-4 img-wrapper">
                    <img src={starWarsImg} alt=""/>
                  </div>
                  <div className="col-md-8 content-wrapper">
                    <div className="row">
                      <div className="name col-md-6">
                        <p>Name: Test one</p>
                      </div>
                      <div className="model col-md-6">
                        <p>Model: Model one</p>
                      </div>
                      <div className="cost col-md-6">
                        <p>Cost: 10000000</p>
                      </div>
                      <div className="consumable col-md-6">
                        <p>Consumable: 6 weeks</p>
                      </div>
                      <div className="mglt col-md-6">
                        <p>MGLT: 100</p>
                      </div>
                      <div className="starship_class col-md-6">
                        <p>Starship Class: Class test one</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="row">
                  <div className="col-md-4">
                    image
                  </div>
                  <div className="col-md-8">
                    details
                  </div>
                </li>
                <li className="row">
                  <div className="col-md-4">
                    image
                  </div>
                  <div className="col-md-8">
                    details
                  </div>
                </li>
              </ul>
            </div>
        );
    }
}

export default SearchResults;
