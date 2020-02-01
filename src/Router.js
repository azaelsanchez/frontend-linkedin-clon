import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./containers/App";

// paginas
import LoginPage from "./containers/LoginRegister/LoginPage.jsx";
import RegisterPage from "./containers/LoginRegister/RegisterPage.jsx";
import Noticias from "./containers/Noticias.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/user/register" component={RegisterPage} />
        <Route exact path="/user/login" component={LoginPage} />
        <Route exact path="/noticias" component={Noticias} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
