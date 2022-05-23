import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "components/dropdown/dropdown";
import DropdownItem from "components/dropdown/dropdown-item/dropdown-item";
import { ReactComponent as BasketSvg } from "assets/image/svg/shopping.svg";
import { ReactComponent as ProfileSvg } from "assets/image/svg/profile.svg";
import Search from "../search/search";
import styles from "./header-list.module.scss";

const HeaderList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Search />
      </li>
      <li className={styles.list__item}>
        <Link to="/basket">
          <span className={styles.list__basket} aria-label="basket">
            <BasketSvg />
          </span>
        </Link>
      </li>
      <li className={styles.list__item}>
        <Dropdown btnContent={<ProfileSvg />}>
          <Link to="/login">
            <DropdownItem text="Вход" />
          </Link>
          <Link to="/registration">
            <DropdownItem text="Регистрация" />
          </Link>
          <Link to="/profile">
            <DropdownItem text="Кабинет" />
          </Link>
          <Link to="/admin">
            <DropdownItem text="Настройки" />
          </Link>
        </Dropdown>
      </li>
    </ul>
  );
};

export default HeaderList;
