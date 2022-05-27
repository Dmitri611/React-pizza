/* eslint-disable react/prop-types */
import React from "react";
import styles from "./params.module.scss";

const Params = ({
  typeName,
  sizeName,
  typesList,
  activeType,
  setActiveType,
  sizesList,
  activeSize,
  setActiveSize,
  onChange,
}) => {
  return (
    <div className={styles.params}>
      <ul className={styles.params__list}>
        {typesList?.map((text) => (
          <li className={styles.params__list_item} key={text}>
            <label className={styles.params__list_item}>
              <input
                onChange={onChange}
                className={styles.params__list_input}
                type="radio"
                name={typeName}
                defaultChecked={text === activeType}
                onClick={() => setActiveType(text)}
              />
              <span className={styles.params__list_text}>{text}</span>
            </label>
          </li>
        ))}
      </ul>
      <ul className={styles.params__list}>
        {sizesList?.map((text) => (
          <li className={styles.params__list_item} key={text}>
            <label className={styles.params__list_item}>
              <input
                onChange={onChange}
                className={styles.params__list_input}
                type="radio"
                name={sizeName}
                defaultChecked={text === activeSize}
                onClick={() => setActiveSize(text)}
              />
              <span className={styles.params__list_text}>{text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Params;
