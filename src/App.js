import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { About } from "./components/Main/Home/About";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";

import { Home as HomeBeatucian } from "./components/Main/Pages/Beatucian/Home";
import { Schedules } from "./components/Main/Pages/Beatucian/Schedules";

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/login" component={Login} />
        {/* Beautician */}
        <Route exact path="/beautician" component={HomeBeatucian} />
        <Route exact path="/beautician-schedule" component={Schedules} />
      </Switch>
      <Footer />
    </Router>
  </>
);
