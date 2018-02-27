import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMGLTChange(e.target.value);
  }

  render() {
    return (
      <div className="col-md-12">
        <form onSubmit={this.props.onHandleSubmit}>
          <div className="form-group">
            <div className="wrapper-search">
              <input type="text" className="form-control" id="searchInput" aria-describedby="searchHelp"
                     placeholder="Enter the distance in mega lights (MGLT)" onChange={this.handleChange}/>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
            <small id="searchHelp" className="form-text text-muted">
              We'll never share your email with anyone else. {this.props.mglt}
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
