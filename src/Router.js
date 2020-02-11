import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./containers/App";

// paginas
import LoginPage from "./containers/LoginRegister/LoginPage.jsx";
import LoginCompanyPage from "./containers/LoginRegister/LoginCompanyPage";
import RegisterPage from "./containers/LoginRegister/RegisterPage.jsx";
import RegisterCompanyPage from "./containers/LoginRegister/RegisterCompanyPage";
import Noticias from "./containers/Noticias.jsx";
import Post from "./containers/Post.jsx";
import ModificarPerfilUser from "./containers/ModificarPerfilUser";
import PerfilUser from "./containers/PerfilUser";
import offerDetails from "./containers/OfferDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/user/register" component={RegisterPage} />
        <Route exact path="/user/login" component={LoginPage} />
        <Route exact path="/company/login" component={LoginCompanyPage} />
        <Route exact path="/company/register" component={RegisterCompanyPage} />
        <Route exact path="/anuncios" component={Noticias} />
        <Route exact path="/oferta/:id/:name" component={offerDetails} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/modificaruser" component={ModificarPerfilUser} />
        <Route exact path="/PerfilUser" component={PerfilUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
