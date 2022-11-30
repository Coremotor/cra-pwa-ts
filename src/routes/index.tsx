import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import LayoutWrapper from "shared/layout";
import Home from "pages/Home";
import Documents from "pages/Documents";
import Profile from "pages/Profile";
import NoMatch from "pages/NoMatch";
import React from "react";
import Protected from "routes/Protected";
import { RoutesNames } from "routes/routesNames";
import Statements from "pages/Statements";
import Salary from "pages/Salary";

function RootRoutes() {
  return (
    <Routes>
      <Route path={RoutesNames.login} element={<Login />} />
      <Route element={<LayoutWrapper />}>
        <Route
          path={RoutesNames.home}
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.statements}
          element={
            <Protected>
              <Statements />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.salary}
          element={
            <Protected>
              <Salary />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.docs}
          element={
            <Protected>
              <Documents />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.profile}
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default RootRoutes;
