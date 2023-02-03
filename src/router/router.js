import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

import Layout from "../layout/Layout";
// Pages
import Home from "../pages/Home";
import Profil from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TokenService from "../services/token.service";
import { Create } from "../pages/Create";
import Payment from "../pages/Payment";

const Router = () => {
  const user = TokenService.getUser() || null;
  const location = useLocation();

  const pathName = location.state?.from || "/";

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/profile"
          element={
            <PrivateRouter>
              <Profil />
            </PrivateRouter>
          }
        />
        {user ? (
          <Route path="/login" element={<Navigate to={pathName} />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        {user ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
      </Route>
    </Routes>
  );
};

export default Router;
