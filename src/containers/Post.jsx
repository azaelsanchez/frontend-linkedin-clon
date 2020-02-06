import React, { Component } from "react";
import { connect } from "react-redux";

//import axios from "axios";

import PanelUser from "../components/Panel-user";

import { crearPost } from "../redux/actions/dataActions";
import "./Noticias.css";

class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   anuncios: []
    // };
  }
  componentDidMount() {
    crearPost();
  }

  render() {
    return (
      <div className="noticias-post">
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
          <PanelUser />
          <div className="container-anuncios">
            {this.props.post?.map(item => {
              return (
                <div key={item.id} className="items-anuncio">
                  <h1>@ {item.user_id}</h1>
                  <h4>Descripción: {item.description} </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
  return {
    post: state.post.post
  };
}

export default connect(mapStateToProps)(Post);
