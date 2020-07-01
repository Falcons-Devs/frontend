import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { Meeting } from "./components/Main/Pages/Meeting";
import { Footer } from "./components/Footer";

import { Router } from "@reach/router";

import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path="/" />
      <Meeting path="/meeting" />
    </Router>
    <Footer />
  </>
);
