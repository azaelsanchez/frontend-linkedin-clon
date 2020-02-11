import React, { Component } from "react";
// import { connect } from "react-redux";

//import axios from "axios";

import Navbar from "../components/Navbar";
// import { modifyUser } from "../redux/actions/dataActions";
//import "./Noticias.css";

class ModificarPerfilUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div classNameName="container">
        <Navbar />

        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     modificarUser: state.data.modificarUser
//   };
// }

export default ModificarPerfilUser;
