import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchCity } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";

import { showOfferWorks } from "../redux/actions/dataActions";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: null
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

    //this.props.history.push(`/oferta/${item.id}/${item.name}`);

    console.log(item);
    SearchCity(this.state.search);
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
          <button onClick={this.handleSubmitSearch}></button>
        </form>

        <div className="search-list">
          {this.props.citiesFound.map(item => (
            <div className="busqueda-realizada" key={item?.id}>
              <li> Búsqueda por: {item?.city} </li>
              <li> {item?.name} </li>
              <li> {item?.title_offer} </li>
              <li> {item?.description} </li>
              <button onClick={`/oferta/${item?.id}`}>Ir</button>
              <Link to={`/oferta/${item?.id}`}>ver oferta</Link>
            </div>
          ))}
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
