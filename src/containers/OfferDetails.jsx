import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import "./App.css";

import { offerDetails } from "../redux/actions/dataActions";
import Navbar from "../components/Navbar";
import { showUserPanel } from "../redux/actions/dataActions";

class OfferDetails extends Component {
  componentDidMount() {
    showUserPanel();
  }
  aceptarOffer(num) {
    const user = this.props.profile;
    const idOffer = {
      offer_id: num,
      user_id: user[0].id
    };

    Axios.post(`http://localhost:8000/user/solicitaroferta`, idOffer)
      .then(res => {
        console.log("algo mi niño" + res);
      })
      .catch(err => console.error(err));
  }

  renderOfferWorks = item => {
    console.log(item, "llegamos");
    return (
      <div className="noticias-post">
        <Navbar />
        <div {...this.props.detail} className="container-details">
          <div key={item?.id} className="offer-container">
            <h1>{item?.title_offer}</h1>
            <p> Fecha: {item?.created_at}</p>
            <p> {item?.company_name} </p>
            <h4> Descripción del puesto </h4>
            <p> {item?.description} </p>
            <h4> Nivel de experiencia </h4>
            <p> {item?.experience_level} </p>
            <h4> Tipo de jornada </h4>
            <p> {item?.working_day} </p>
            <h4> Habilidades requeridas </h4>
            <p> {item?.required_skills} </p>
            <button onClick={ev => this.aceptarOffer(item.id)}>Aceptar</button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>{this.props.detail && this.renderOfferWorks(this.props.detail)}</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    detail: state.details.detail,
    profile: state.user.profile
  };
}

export default connect(mapStateToProps)(OfferDetails);
