import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import "./Noticias.css";
import { perfilUser } from "../redux/actions/dataActions";


class PerfilUser extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //   anuncios: []
        // };
      }
      componentDidMount() {
        perfilUser();
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
              <div className="container-anuncios">
                {this.props.puser?.map(item => 
                    <div key={item.id} className="items-anuncio">
                      <h1>{item.name}</h1>
                      <h1>{item.surname}</h1>
                      <p>Email: {item.email} </p>
                      <p>Direccion: {item.address} </p>
                      <p>Telefono: {item.phone} </p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        );
      }
    }
    
    function mapStateToProps(state) {
      return {
        puser: state.puser.puser
      };
    }
    
    export default connect(mapStateToProps)(PerfilUser);