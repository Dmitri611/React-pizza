import React from "react";
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
        {auth.isAuth ? (
          (auth.isAdmin ? (
            <Dropdown btnContent={<ProfileSvg />}>
          <Link to="/profile">
            <DropdownItem text="Профиль" />
          </Link>
          <Link to="/admin">
            <DropdownItem text="Настройки" />
          </Link>
        </Dropdown>
          )
          : (
            <Link to="/profile">
            <ProfileSvg />
          </Link>
          )
          )
        ) : (
          <Dropdown btnContent={<ProfileSvg />}>
            <Link to="/login">
              <DropdownItem text="Вход" />
            </Link>
            <Link to="/registration">
              <DropdownItem text="Регистрация" />
            </Link>
          </Dropdown>
        )}
      </li>
    </ul>
  );
};

export default HeaderList;
