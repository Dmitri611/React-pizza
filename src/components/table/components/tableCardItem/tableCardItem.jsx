import PropTypes from "prop-types";
import React from "react";
import styles from "./tableCardItem.module.scss";

const TableCardItem = ({ children, text }) => {
  return (
    <td className={styles.table__item}>
      {text}
      {children}
    </td>
  );
};

TableCardItem.propTypes = {
  children: PropTypes.object,
  text: PropTypes.string,
};

TableCardItem.defaultProps = {
  children: null,
  text: null,
};

export default TableCardItem;
