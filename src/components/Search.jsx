import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { SearchCity } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

import { showOfferWorks } from "../redux/actions/dataActions";
import { Redirect } from "react-router-dom";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      redirect: ""
    };
  }
  componentDidMount() {
    showOfferWorks();
  }

  handleSearchChange = event => {
    event.preventDefault();
    const query = event.target.value;
    this.setState({
      search: query
    });
  };

  handleSubmitSearch = (event, item) => {
    event.preventDefault();

    SearchCity(this.state.search);
    this.setState({
      redirect: "algo"
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/anunciosbusqueda" />;
    }
  };

  render() {
    const offer = this.props.offer;
    // console.log(this.props.detail);
    return (
      <div className="container-search">
        <form className="container-search">
          <input
            value={this.state.search}
            ref={this.searchRef}
            name="search"
            onChange={this.handleSearchChange}
            type="text"
            placeholder="Buscar..."
          />
          {/* <button onClick={this.handleSubmitSearch}></button> */}
        </form>

        <div className="search-list">
          {this.props.citiesFound.map(item => (
            <Fragment></Fragment>
          ))}
          {this.renderRedirect()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citiesFound: state.searching.citiesFound,
    offer: state.data.offer
  };
}

export default connect(mapStateToProps)(Search);
