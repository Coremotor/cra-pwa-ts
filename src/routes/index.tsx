import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesNames } from "routes/routesNames";
import AppLayout from "shared/layout/AppLayout";
import LoginPage from "pages/Login";
import HomePage from "pages/Home";
import DocumentsPage from "pages/Documents";
import ProfilePage from "pages/Profile";
import NoMatchPage from "pages/NoMatch";
import StatementsPage from "pages/Statements";
import SalaryPage from "pages/Salary";
import Protected from "routes/Protected";
import PhoneConfirmation from "pages/PhoneConfirmation";

function RootRoutes() {
  return (
    <Routes>
      <Route path={RoutesNames.login} element={<LoginPage />} />
      <Route
        path={RoutesNames.phoneConfirmation}
        element={<PhoneConfirmation />}
      />
      <Route element={<AppLayout />}>
        <Route
          path={RoutesNames.home}
          element={
            <Protected>
              <HomePage />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.statements}
          element={
            <Protected>
              <StatementsPage />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.salary}
          element={
            <Protected>
              <SalaryPage />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.docs}
          element={
            <Protected>
              <DocumentsPage />
            </Protected>
          }
        />
        <Route
          path={RoutesNames.profile}
          element={
            <Protected>
              <ProfilePage />
            </Protected>
          }
        />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default RootRoutes;
