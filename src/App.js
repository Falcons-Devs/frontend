import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { Meeting } from "./components/Main/Pages/Meeting";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";

import { Router } from "@reach/router";

import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Signin path="/signin" />
      <Meeting path="/meeting" />
    </Router>
    <Footer />
  </>
);
