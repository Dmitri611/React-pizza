import PropTypes from "prop-types";
import React from "react";
import styles from "./tableCard.module.scss";

const TableCard = ({ children }) => {
  return <tr className={styles.table__card}>{children}</tr>;
};

TableCard.propTypes = {
  children: PropTypes.array.isRequired,
};

export default TableCard;
