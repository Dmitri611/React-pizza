import React from "react";
import PropTypes from "prop-types";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
