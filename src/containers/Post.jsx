import React, { Component } from "react";
import { connect } from "react-redux";

//import axios from "axios";

import PanelUser from "../components/Panel-user";
import Navbar from "../components/Navbar";


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
      <Navbar/>
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
            {this.props.post?.map(item => 
                <div  className="items-anuncio">
                  <h1>@ {item.name}</h1>
                  <img src={item.image_path}></img>
                  <h4>Descripción: {item.description} </h4>
                  <button>Comentar</button>
                </div>
             
            )}
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
