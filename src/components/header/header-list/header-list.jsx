import React from "react";
import styles from "./header-list.module.scss";
import Search from "../search/search";
import Dropdown from "../../dropdown/dropdown";
import DropdownItem from "../../dropdown/dropdown-item/dropdown-item";

const HeaderList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Search />
      </li>
      <li className={styles.list__item}>
        <span className={styles.list__basket} aria-label="basket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            width="25"
            height="25"
            viewBox="0 0 16 16"
          >
            <path
              fill="black"
              d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"
            ></path>
          </svg>
        </span>
      </li>
      <li className={styles.list__item}>
        <Dropdown
          btnContent={
            <svg
              width="45"
              height="25"
              viewBox="0 0 122 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.7 65.1C78.7 65.1 93.3 50.5 93.3 32.5C93.3 14.5 78.7 0 60.7 0C42.7 0 28.1 14.6 28.1 32.5C28.1 50.4 42.7 65.1 60.7 65.1V65.1ZM60.7 8.5C73.9 8.5 84.7 19.3 84.7 32.5C84.7 45.7 73.9 56.5 60.7 56.5C47.5 56.5 36.7 45.7 36.7 32.5C36.7 19.3 47.5 8.5 60.7 8.5Z"
                fill="black"
              />
              <path
                d="M4.3 116H117.5C119.9 116 121.8 114.1 121.8 111.7C121.8 89.2 103.5 70.8 80.9 70.8H40.9C18.4 70.8 0 89.1 0 111.7C0 114.1 1.9 116 4.3 116V116ZM40.9 79.4H80.9C97.3 79.4 110.8 91.6 112.9 107.4H8.9C11 91.7 24.5 79.4 40.9 79.4Z"
                fill="black"
              />
            </svg>
          }
        >
          <DropdownItem text="Вход" />
          <DropdownItem text="Регистрация" />
          <DropdownItem text="Кабинет" />
          <DropdownItem text="Настройки" />
        </Dropdown>
      </li>
    </ul>
  );
};

export default HeaderList;
