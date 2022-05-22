import React, { useState } from "react";
import styles from "./sort.module.scss";
import Dropdown from "../../../../components/dropdown/dropdown";
import DropdownItem from "../../../../components/dropdown/dropdown-item/dropdown-item";

const Sort = () => {
  const [value, setValue] = useState("популярности");

  const change = (e) => {
    setValue(e.target.innerText);
  };

  return (
    <div className={styles.sort}>
      <span className="sort__text">Сортировка по:</span>
      <Dropdown btnContent={value}>
        <DropdownItem handler={change} text="популярности" />
        <DropdownItem handler={change} text="по цене" />
        <DropdownItem handler={change} text="по алфавиту" />
      </Dropdown>
    </div>
  );
};

export default Sort;
