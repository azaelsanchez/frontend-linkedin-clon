import React, { Component } from "react";
import { connect } from "react-redux";

class OfferDetails extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container-details">
        <h1>Details</h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    detail: state.offer.detail
  };
}

export default connect(mapStateToProps)(OfferDetails);
