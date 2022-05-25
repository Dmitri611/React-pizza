import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import styles from "./card.module.scss";

const Card = ({ image, name, desc, price, handler }) => {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.card}>
      <a onClick={handler} href="#">
        <Picture wrapper={styles.card__image_wrapper} className={styles.card__image} src={image} />
        <h2 className={styles.card__name}>{name}</h2>
        <div className={styles.card__ingredients}>
          <p>{desc}</p>
        </div>
      </a>
      <Params typeName="type1" sizeName="size1" />
      <div className={styles.card__bottom}>
        <span className={styles.card__bottom_price}>От {price}</span>
        <Button handler={countPlus} className="button--product">
          <span className={styles.card__bottom_span}>+</span>
          Добавить
          <span className={styles.card__bottom_span}>{count}</span>
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Card;
