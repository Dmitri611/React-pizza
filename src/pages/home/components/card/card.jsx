/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import ModalProduct from "components/modalProduct/modalProduct";
import styles from "./card.module.scss";

const Card = ({
  pizzaImage,
  pizzaPrice,
  pizzaHelf,
  pizzaEnergy,
  pizzaCarbohydrates,
  pizzaFats,
  pizzaProteins,
  pizzaDesc,
  pizzaName,
}) => {
  const [modalAddStyle, setModalAddStyle] = useState(null);

  const style = "modal-display";

  const openModal = () => {
    setModalAddStyle(style);
  };

  const close = () => {
    setModalAddStyle(null);
  };

  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className={styles.card}>
        <a onClick={openModal} href="#">
          <Picture
            wrapper={styles.card__image_wrapper}
            className={styles.card__image}
            src={pizzaImage}
          />
          <h2 className={styles.card__name}>{pizzaName}</h2>
          <div className={styles.card__ingredients}>
            <p>{pizzaDesc}</p>
          </div>
        </a>
        <Params typeName="type1" sizeName="size1" />
        <div className={styles.card__bottom}>
          <span className={styles.card__bottom_price}>
            От {pizzaPrice * (count > 1 ? count : 1)}р
          </span>
          <Button handler={countPlus} className="button--product">
            <span className={styles.card__bottom_span}>+</span>
            Добавить
            <span className={styles.card__bottom_span}>{count}</span>
          </Button>
        </div>
      </div>
      <ModalProduct
        onClick={countPlus}
        handler={close}
        display={modalAddStyle}
        pizzaName={pizzaName}
        pizzaDesc={pizzaDesc}
        pizzaProteins={pizzaProteins}
        pizzaFats={pizzaFats}
        pizzaCarbohydrates={pizzaCarbohydrates}
        pizzaEnergy={pizzaEnergy}
        pizzaHelf={pizzaHelf}
        pizzaPrice={pizzaPrice}
        pizzaImage={pizzaImage}
      />
    </>
  );
};

// Card.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default Card;
