import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
import LamudiHomePage  from "./pages/home/Home";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...LamudiHomePage,
        path: "/home",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
