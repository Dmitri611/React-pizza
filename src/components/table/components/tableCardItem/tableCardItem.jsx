/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";
import styles from "./tableCardItem.module.scss";

const TableCardItem = ({ children, text, className }) => {
  return (
    <td className={classNames(styles.table__item, styles[className])}>
      {text}
      {children}
    </td>
  );
};

// TableCardItem.propTypes = {
//   children: PropTypes.object,
//   text: PropTypes.string,
// };

// TableCardItem.defaultProps = {
//   children: null,
//   text: null,
// };

export default TableCardItem;
