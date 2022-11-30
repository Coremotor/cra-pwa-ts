import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import Layout from "shared/layout";
import Home from "pages/Home";
import About from "pages/About";
import Dashboard from "pages/Dashboard";
import NoMatch from "pages/NoMatch";
import React from "react";
import RequireAuth from "routes/Protected";

const RoutesNames = {
  home: "/",
  login: "login",
  about: "about",
  dashboard: "dashboard",
};

function RootRoutes() {
  return (
    <Routes>
      <Route path={RoutesNames.login} element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path={RoutesNames.home}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path={RoutesNames.about}
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
        <Route
          path={RoutesNames.dashboard}
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default RootRoutes;
