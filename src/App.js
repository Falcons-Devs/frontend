import React from "react";
import { Router } from "@reach/router";

import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { About } from "./components/Main/Home/About";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";

import { Home as HomeBeautician } from "./components/Main/Pages/Beautician/Home";
import { Schedules as ScheduleBeautician } from "./components/Main/Pages/Beautician/Schedules";
import { Procedures as ProcedureBeautician } from "./components/Main/Pages/Beautician/Procedures";
import { Diary as DiaryBeautician } from "./components/Main/Pages/Beautician/Diary";

import { Home as HomeClient } from "./components/Main/Pages/Client/Home";
import { AppointmentHistory as AppointmentsClient } from "./components/Main/Pages/Client/appointment-history";
import { CreateAppointment as CreateAppointmentClient } from "./components/Main/Pages/Client/appointment";

import { Home as HomeAdmin } from "./components/Main/Pages/Admin/Home";

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
      <DiaryBeautician path="/beautician-diary" />
      {/* Client */}
      <HomeClient path="/client" />
      <AppointmentsClient path="/client-appointments" />
      <CreateAppointmentClient path="/client-create-appointment" />
      {/* Admin */}
      <HomeAdmin path="/admin" />
    </Router>
    <Footer />
  </>
);
