import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchCity } from "../redux/actions/dataActions";
import { Redirect } from 'react-router-dom';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      redirect:''
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
    SearchCity(this.state.search);
    this.setState({
      redirect: 'algo'
  });

  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/anunciosbusqueda' />
    }
  }


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
            <p> </p>
          ))}
          {this.renderRedirect()}
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
