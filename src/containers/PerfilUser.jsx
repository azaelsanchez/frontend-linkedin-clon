import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import "./Noticias.css";
import { showUserPanel } from "../redux/actions/dataActions";

class PerfilUser extends Component {
  componentDidMount() {
    showUserPanel();
  }

  render() {
    const user = this.props.profile;
    console.log(this.props.profile);
    return (
      <div className="noticias-post">
        <Navbar />
        <form className="form-group">
          <input
            type="text"
            placeholder="Buscar gente"
            className="input-gente"
          />
          <input
            type="text"
            placeholder="Buscar empleo"
            className="input-empleo"
          />
        </form>
        <div className="container-noticias">
          <div {...this.props.profile.id} className="container-anuncios">
            {this.props.profile.id}
            <div className="perfil-container">
              <h1>
                {user[0]?.name} {user[0]?.surname}
              </h1>

              <p>Email: {user[0]?.email} </p>
              <p>Direccion: {user[0]?.address} </p>
              <p>Telefono: {user[0]?.phone} </p>
            </div>
          </div>
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

export default connect(mapStateToProps)(PerfilUser);
