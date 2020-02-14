import React, { Component } from "react";

import { connect } from "react-redux";

import { showUserPanel } from "../redux/actions/dataActions";

import "../components/css/Panel-user.css";
import { Link } from "react-router-dom";

class PanelUser extends Component {
  componentDidMount() {
    showUserPanel();
  }

  render() {
    //const user = JSON.parse(localStorage.getItem("user"));
    const user = this.props.profile;
    console.log(this.props.profile);
    console.log(user[0]);
    return (
      <div {...this.props.profile.id} className="panel-lateral">
        <img src={user[0]?.image} alt="avatar" />
        {this.props.profile.id}
        <div className="perfil">
          <h3>Bienvenido {user[0]?.name}</h3>

          <p>Email: {user[0]?.email} </p>
          <p>
            Nombre:{user[0]?.name} {user[0]?.surname}
          </p>
        </div>
        <div className="perfil">
          <h3>Héroe te buscamos!</h3>
          <p> ¿Quieres tener más fama y relevancia?</p>
          <p>AAjobs se encargará de todo!</p>
          <img
            className="anuncio-img"
            src="https://media1.tenor.com/images/116064b8d5d65bd2f65cdf8dcda9de24/tenor.gif?itemid=9928488"
            alt="IneedAhero"
          />
        </div>
        <div className="footer">
          @AAjobs 2020 - Creado con React por{" "}
          <Link to="https://github.com/azaelsanchez">Azael Sanchez</Link> y
          <Link to="https://github.com/naymco"> Alexander Santos</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile
  };
}

export default connect(mapStateToProps)(PanelUser);
