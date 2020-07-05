import React from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { About } from "./components/Main/Home/About";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";

import { Home as HomeBeautician } from "./components/Main/Pages/Beatucian/Home";
import { Schedules as ScheduleBeautician } from "./components/Main/Pages/Beatucian/Schedules";
import { Procedures as ProcedureBeautician } from "./components/Main/Pages/Beatucian/Procedures";

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
      <HomeBeautician path="/beautician" />
      <ScheduleBeautician path="/beautician-schedule" />
      <ProcedureBeautician path="/beautician-procedure" />
    </Router>
    <Footer />
  </>
);
