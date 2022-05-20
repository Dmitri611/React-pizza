import React from "react";
import "./scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/wrappers/layout/layout";
import Home from "./components/pages/home/home";
import Profile from "./components/pages/profile/profile";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}
