import React from "react";
import { ReactComponent as SearchSvg } from "assets/image/svg/search.svg";
import styles from "./search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.search__content}>
        <input
          className={styles.search__input}
          type="search"
          name="search"
          placeholder="Поиск..."
        />
        <button type="button" className={styles.search__btn}>
          <SearchSvg />
        </button>
      </div>
    </div>
  );
};

export default Search;
