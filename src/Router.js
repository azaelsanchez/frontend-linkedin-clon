import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";

import App from "./containers/App";

// paginas
import LoginPage from "./containers/LoginRegister/LoginPage.jsx";
import RegisterPage from "./containers/LoginRegister/RegisterPage.jsx";
import Noticias from "./containers/Noticias.jsx";
import Post from "./containers/Post.jsx";
import ModificarPerfilUser from "./containers/ModificarPerfilUser";
import PerfilUser from "./containers/PerfilUser";

const config = {
  apiKey: "AIzaSy*********************",
  authDomain: "react-firebase-94af6.firebaseapp.com",
  databaseURL: "https://react-firebase-94af6.firebaseio.com",
  storageBucket: "react-firebase-94af6.appspot.com",
  messagingSenderId: "7968**********"
};
firebase.initializeApp(config);

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/user/register" component={RegisterPage} />
        <Route exact path="/user/login" component={LoginPage} />
        <Route exact path="/anuncios" component={Noticias} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/modificaruser" component={ModificarPerfilUser} />
        <Route exact path="/PerfilUser" component={PerfilUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
