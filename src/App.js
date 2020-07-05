import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { About } from "./components/Main/Home/About";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";

import { Home as HomeEsteticista } from "./components/Main/Pages/Esteticista/Home";

import { Router } from "@reach/router";

import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Signin path="/signin" />
      <Login path="/login" />
      {/* Esteticista */}
      <HomeEsteticista path="/esteticista" />
    </Router>
    <Footer />
  </>
);
