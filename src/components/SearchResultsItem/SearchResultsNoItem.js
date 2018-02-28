import React, { Component } from 'react';
import './SearchResultsItem.css';

class SearchResultsNoItem extends Component {
  render() {
    return (
      <li className="row list-item">
        <div className="col-md-12">
          Find how many stops are needed to cover the distance searched. <br />
          <strong>The search only accepts a number and cannot be empty in MGLT (Megalight). </strong>
          <br /> Have fun. :)
        </div>
      </li>
    );
  }
}

export default SearchResultsNoItem;