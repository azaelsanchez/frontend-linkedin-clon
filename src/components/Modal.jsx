import React from "react";

import "./css/Modal.css";

const Modal = props => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
          //   display: props.show ? "block" : "none"
        }}
      >
        <div className="modal-header">
          <h3>Modal Header</h3>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>{props.children}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>
            CLOSE
          </button>
          <button className="btn-continue">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
