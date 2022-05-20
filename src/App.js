import React from "react";
import "./scss/styles.scss";
import Layout from "./components/wrappers/layout/layout";
import Home from "./components/pages/home/home";

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
