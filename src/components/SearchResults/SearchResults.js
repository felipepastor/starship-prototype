import React, {Component} from 'react';
import './SearchResults.css';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';
import SearchResultsNoItem from '../SearchResultsItem/SearchResultsNoItem';

class SearchResults extends Component {
  renderSearchResultsItem() {
    if (this.props.starships.length) {
      return this.props.starships.map((starship, i) => {
        return <SearchResultsItem id={i} starship={starship}/>
      });
    }

    return <SearchResultsNoItem/>
  }

  render() {
    return (
      <div className="col-md-12">
        <ul>
          {
            this.renderSearchResultsItem()
          }
        </ul>
      </div>
    );
  }
}

export default SearchResults;
