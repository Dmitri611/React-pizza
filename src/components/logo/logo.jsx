/* eslint-disable react/prop-types */
import React from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/image/svg/logo.svg";

const Logo = ({ className }) => {
  return (
    <Link to="/" className={classNames(styles.logo, className)}>
      <LogoSvg />
      <span className={styles.logo__title}>react pizza</span>
    </Link>
  );
};

export default Logo;
