import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { About } from "./components/Main/Home/About";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";

import { Home as HomeBeatucian } from "./components/Main/Pages/Beatucian/Home";
import { Schedules as ScheduleBeatucian } from "./components/Main/Pages/Beatucian/Schedules";

import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={Signin} />
        <Route path="/login" component={Login} />
        {/* Beautician */}
        <Route path="/beautician" component={HomeBeatucian} />
        <Route path="/beautician/schedule" component={ScheduleBeatucian} />
      </Switch>
      <Footer />
    </Router>
  </>
);
