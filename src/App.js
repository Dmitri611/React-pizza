import React from "react";
import "./scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

//pages
import Home from "./components/pages/home/home";
import Profile from "./components/pages/profile/profile";
import Login from "./components/pages/login/login";
import Registration from "./components/pages/registration/registration";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Layout>
  );
}
