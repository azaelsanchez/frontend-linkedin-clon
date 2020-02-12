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
  componentDidMount() {
    SearchCity();
  }

  searchRef = React.createRef();
  handleSearchChange = event => {
    event.preventDefault();
  };

  handleSubmitSearch = (event, ciudad) => {
    event.preventDefault();
    const searchCity = event.target.value;
    this.setState({
      search: searchCity
    });
    console.log(this.state.search);
  };

  render() {
    let filter = this.props.search;
    console.log(filter);
    return (
      <div className="container-search">
        <form onSubmit={this.handleSubmitSearch} className="container-search">
          <input
            search={this.state.search}
            ref={this.searchRef}
            name="search"
            onChange={this.handleSearchChange}
            type="text"
            placeholder="Buscar..."
          />
        </form>
        <div className="search-list">
          {filter.map(item => (
            <li> {item.city} </li>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.searching.search
  };
}

export default connect(mapStateToProps)(Search);
