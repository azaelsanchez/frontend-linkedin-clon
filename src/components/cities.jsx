import React, { Component } from "react";
import { connect } from "react-redux";

import { showCities } from "../redux/actions/dataActions";

class Cities extends Component {
  
  componentDidMount() {
    showCities();
  }
  render() {
    return (
      <div className="cities-container">
        {this.props.cities?.map(city => {
          return (
            <div key={city.id} className="citie-block">
              <h1> {city.city} </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cities: state.city.cities
  };
}

export default connect(mapStateToProps)(Cities);
