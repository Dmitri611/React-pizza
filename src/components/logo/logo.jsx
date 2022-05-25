/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "assets/image/svg/logo.svg";
import styles from "./logo.module.scss";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={classNames(styles.logo, className)}>
      <LogoSvg />
      <span className={styles.logo__title}>react pizza</span>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: null,
};

export default Logo;
