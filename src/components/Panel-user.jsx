import React, { Component } from "react";
import { connect } from "react-redux";

import { showUserPanel } from "../redux/actions/dataActions";

import "./css/Panel-user.css";

class PanelUser extends Component {
  componentDidMount() {
    showUserPanel();
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
      <div className="panel-lateral">
        <img src={user[0].image} alt="avatar" />
        <h3>Bienvenido {user[0].name}</h3>
        <p>Perfil:</p>
        <p>{user[0].email} </p>
        <p>
          {user[0].name} {user[0].surname}
        </p>
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
