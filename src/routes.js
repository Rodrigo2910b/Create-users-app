import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Users from "./containers/Users";

function BaseRoutes() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/list-users" Component={Users} />
    </Routes>
  );
}
export default BaseRoutes;
