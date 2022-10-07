import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Users from "./components/users";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Users />
    </Router>
  );
}
