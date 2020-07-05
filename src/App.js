import React from "react";
import { Router } from "@reach/router";

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
    <GlobalStyle />
    <Header />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Signin path="/signin" />
      <Login path="/login" />
      {/* Beautician */}
      <HomeBeatucian path="/beautician" />
      <Schedules path="/beautician-schedule" />
    </Router>
    <Footer />
  </>
);
