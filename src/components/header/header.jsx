import React from "react";
// import styles from './header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <a className="logo" href="#">
            <h1>pizza lab</h1>
          </a>
          <p className="header__logo-desc">Лучшая пицца в мире!</p>
        </div>
        <form className="header__search" action="/search/" target="_blank">
          <input
            className="header__search-input"
            type="search"
            required
            placeholder="Поиск по сайту"
          />
          <input className="header__search-input" type="submit" value="🔍" />
        </form>
        <div className="header__nav">
          <button className="button">Корзина</button>
          <div className="button__container">
            <button className="button">Вход</button>
            <button className="button">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
}
