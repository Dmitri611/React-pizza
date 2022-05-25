import React from "react";
import PropTypes from "prop-types";
import styles from "./tableCardItem.module.scss";

const TableCardItemTh = ({ text }) => {
  return <th className={styles.table__item}>{text}</th>;
};

TableCardItemTh.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TableCardItemTh;
