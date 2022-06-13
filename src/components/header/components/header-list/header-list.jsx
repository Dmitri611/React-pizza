import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "components/dropdown/dropdown";
import DropdownItem from "components/dropdown/dropdown-item/dropdown-item";
import { ReactComponent as BasketSvg } from "assets/image/svg/shopping.svg";
import { ReactComponent as ProfileSvg } from "assets/image/svg/profile.svg";
import { useSelector } from "react-redux";
import { authSelector } from "store/selectors/selectors";
import Search from "../search/search";
import styles from "./header-list.module.scss";

const HeaderList = () => {
  const auth = useSelector(authSelector);
  const [checked, setChecked] = useState(false);

  const change = () => {
    setChecked(!checked);
  };

  return auth.isAuth ? (
    auth.isAdmin ? (
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Search />
        </li>
        <li className={styles.list__item}>
          <Dropdown btnContent={<ProfileSvg />} handler={change} check={checked}>
            <Link to="/profile">
              <DropdownItem handler={change} text="Профиль" />
            </Link>
            <Link to="/admin">
              <DropdownItem handler={change} text="Настройки" />
            </Link>
          </Dropdown>
        </li>
      </ul>
    ) : (
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Search />
        </li>
        <li className={styles.list__item}>
          <Link to="/basket">
            <BasketSvg />
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link to="/profile">
            <ProfileSvg />
          </Link>
        </li>
      </ul>
    )
  ) : (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Search />
      </li>
      <li className={styles.list__item}>
        <Dropdown btnContent={<ProfileSvg />} handler={change} check={checked}>
          <Link to="/login">
            <DropdownItem handler={change} text="Вход" />
          </Link>
          <Link to="/registration">
            <DropdownItem handler={change} text="Регистрация" />
          </Link>
        </Dropdown>
      </li>
    </ul>
  );
};

export default HeaderList;
