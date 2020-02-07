import React, { Component } from "react";
import { connect } from "react-redux";

import { showUserPanel } from "../redux/actions/dataActions";

import "./css/Modal.css";

class Modal extends Component {
  componentDidMount() {
    showUserPanel();
  }

  render() {
    const user = this.props.profile;
    console.log(user);
    return (
      <div>
        <div
          className="modal-wrapper"
          style={{
            transform: this.props.show
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
            //   display: props.show ? "block" : "none"
          }}
        >
          <div {...this.props.profile.id} className="modal-header">
            {this.props.profile.id}
            <h3> {user[0]?.name} </h3>
            <span className="close-modal-btn" onClick={this.props.close}>
              ×
            </span>
          </div>
          <div className="modal-body">
            <p>{this.props.children}</p>
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={this.props.close}>
              CLOSE
            </button>
            <button className="btn-continue">CONTINUE</button>
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

export default connect(mapStateToProps)(Modal);
