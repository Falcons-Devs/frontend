import React from "react";
import { Router } from "@reach/router";
import Context from "./Context";

import { GlobalStyle } from "./GlobalStyles";
import { Header } from "./components/Header";
import { Home } from "./components/Main/Home";
import { About } from "./components/Main/Home/About";
import { Login } from "./components/Main/Home/Login";
import { Signin } from "./components/Main/Home/Signin";
import { Footer } from "./components/Footer";
import { MenuMobile } from "./components/MenuMobile";
import { Logout } from "./components/Logout";

import HomeBeautician from "./components/Main/Pages/Beautician/Home";
import { Schedules as ScheduleBeautician } from "./components/Main/Pages/Beautician/Schedules";
import { Procedures as ProcedureBeautician } from "./components/Main/Pages/Beautician/Procedures";
import { Diary as DiaryBeautician } from "./components/Main/Pages/Beautician/Diary";

import HomeClient from "./components/Main/Pages/Client/Home";
import { AppointmentHistory as AppointmentsClient } from "./components/Main/Pages/Client/AppointmentHistory";
import CreateAppointmentClient from "./components/Main/Pages/Client/appointment";

import { Home as HomeAdmin } from "./components/Main/Pages/Admin/Home";
import { Client as ClientAdmin } from "./components/Main/Pages/Admin/Client";
import { ClientInformation as ClientInformationAdmin } from "./components/Main/Pages/Admin/ClientInformation";
import { Procedures as ProceduresAdmin } from "./components/Main/Pages/Admin/Procedures";
import CreateProcedureAdmin from "./components/Main/Pages/Admin/Create-procedure";
import { Beautician as BeauticianAdmin } from "./components/Main/Pages/Admin/Beautician";
import CreateBeauticianAdmin from "./components/Main/Pages/Admin/Create-beautician";
import { Diary as DiaryAdmin } from "./components/Main/Pages/Admin/Diary";
import { Users as UsersAdmin } from "./components/Main/Pages/Admin/Users";
import CreateUserAdmin from "./components/Main/Pages/Admin/Create-user/index.js";
import EditUserAdmin from "./components/Main/Pages/Admin/Edit-user";
import { AdminForms } from "./components/AdminForms";

export const App = () => {
  return (
    <Context.Provider>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Signin path="/signin" />
        <Login path="/login" />
        <MenuMobile path="/menu" />
        <Logout path="/logout" />
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
        <ClientAdmin path="/admin-clients" />
        <ClientInformationAdmin path="/admin-client-info/:clientId" />
        <ProceduresAdmin path="/admin-procedures" />
        <CreateProcedureAdmin path="/admin-create-procedure" />
        <BeauticianAdmin path="/admin-beautician" />
        <CreateBeauticianAdmin path="/admin-create-beautician" />
        <DiaryAdmin path="/admin-beautician-diary/:beauticianId" />
        <UsersAdmin path="/admin-users" />
        <CreateUserAdmin path="/admin-create-user" />
        <EditUserAdmin path="/admin-edit-user/:userId" />
        <AdminForms path="/admin-forms" />
      </Router>
      <Footer />
    </Context.Provider>
  );
};
