/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./params.module.scss";

const Params = ({ typeName, sizeName }) => {
  const typesList = ["тонкое", "традиционное"];
  const sizesList = ["26", "30", "36"];

  const [activeType, setActiveType] = useState(typesList[0]);
  const [activeSize, setActiveSize] = useState(sizesList[0]);

  return (
    <div className={styles.params}>
      <ul className={styles.params__list}>
        {typesList.map((text) => (
          <li className={styles.params__list_item} key={text}>
            <label className={styles.params__list_item}>
              <input
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
        {sizesList.map((text) => (
          <li className={styles.params__list_item} key={text}>
            <label className={styles.params__list_item}>
              <input
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
