import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Users from "./components/users";
import UserCreate from "./components/user_create";
import UserUpdate from "./components/user_update";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/create" element={<UserCreate />} />
          <Route exact path="/update/:id" element={<UserUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}
