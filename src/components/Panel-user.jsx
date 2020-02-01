import React, { Component } from "react";

import "./css/Panel-user.css";

class PanelUser extends Component {
  render() {
    return (
      <div className="panel-lateral">
        <img src="/assets/img/avatar.jpg" alt="avatar" />
        <h3>Panel user</h3>
      </div>
    );
  }
}

export default PanelUser;
