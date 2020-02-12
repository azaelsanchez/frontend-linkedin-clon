import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchCity } from "../redux/actions/dataActions";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: null
    };
  }
  componentDidMount() {}

  searchRef = React.createRef();
  handleSearchChange = event => {
    event.preventDefault();
    const query = event.target.value;
    this.setState({
      search: query
    });
  };

  handleSubmitSearch = event => {
    event.preventDefault();
    searchCity(this.state.search);
  };

  render() {
    return (
      <div className="container-search">
        <form onSubmit={this.handleSubmitSearch} className="container-search">
          <input
            value={this.state.search}
            ref={this.searchRef}
            name="search"
            onChange={this.handleSearchChange}
            type="text"
            placeholder="Buscar..."
          />
        </form>
        <div className="search-list">
          {this.props.citiesFound.map(item => (
            <li> {item.city} </li>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citiesFound: state.searching.citiesFound
  };
}

export default connect(mapStateToProps)(Search);
