import React, { Component } from "react";

import { connect } from "react-redux";

import { showUserPanel } from "../redux/actions/dataActions";

import "../components/css/Panel-user.css";

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
        {/* <img src={user.image} alt="avatar" /> */}

        <img
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2019/09/spider-man-lejos-casa.jpg?itok=BpCgLmBD"
          alt="avatar"
        />

        {this.props.profile.id}
        <div className="perfil">
          <h3>Bienvenido {user[0]?.name}</h3>
          <p>Perfil:</p>
          <p>{user[0]?.email} </p>
          <p>
            {user[0]?.name} {user[0]?.surname}
          </p>
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
