import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/LogIn/LogIn";
import HomePage from "./pages/HomePage/HomePage";

import ShopPage from "./components/ShopPage";
import MyProfile from "./pages/MyProfile/MyProfile";
import AdminPannel from "./pages/AdminPannel/AdminPannel";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { Route, Routes } from "react-router";
import ChartPage from "./pages/ChartPage/ChartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<MyProfile />} />
      <Route path="admin/products" element={<AdminPannel />} />
      <Route path="shop/all" element={<ShopPage />} />
      <Route path="cart" element={<ChartPage />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}
export default App;
