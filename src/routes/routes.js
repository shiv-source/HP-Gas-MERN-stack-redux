import React from "react";
import Login from "../components/login";
import Dashboard from "../components/dashboard";
import Pdf from "../components/pdf";

export const routes = [
  { path: "/", component: Login, exact: true },
  { path: "/dashboard", component: Dashboard, exact: true },
  { path: "/pdf", component: Pdf, exact: true },
];
