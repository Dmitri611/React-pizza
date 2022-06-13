/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "components/button/button";
import { ReactComponent as DeleteSvg } from "assets/image/svg/delete.svg";
import styles from "./basketCard.module.scss";

const BasketCard = ({ pizzaImg, pizzaName, pizzaDesc, pizzaPrice }) => {
  const [count, setCount] = useState(1);

  const countPlus = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__product}>
        <picture>
          <img className={styles.card__product_image} src={pizzaImg} alt="pizza" />
        </picture>
        <div className={styles.card__product_text}>
          <p className={styles.card__product_heading}>{pizzaName}</p>
          <p className={styles.card__product_desc}>{pizzaDesc}</p>
        </div>
      </div>
      <div className={styles.card__quantity}>
        <Button handler={countMinus} className="button--size-s" text="−" />
        <input
          className={styles.card__quantity_number}
          type="number"
          min="1"
          max="99"
          size="1"
          value={count}
          readOnly
        />
        <Button handler={countPlus} className="button--size-s" text="+" />
      </div>
      <p className={styles.card__price}>{pizzaPrice}</p>
      <Button className="button--edit">
        <DeleteSvg />
      </Button>
    </div>
  );
};

// BasketCard.propTypes = {
//   pizzaImg: PropTypes.string.isRequired,
//   pizzaName: PropTypes.string.isRequired,
//   pizzaDesc: PropTypes.string.isRequired,
//   pizzaPrice: PropTypes.string.isRequired,
// };

export default BasketCard;
