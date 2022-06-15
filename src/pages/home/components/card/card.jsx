/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import ModalProduct from "components/modalProduct/modalProduct";
import realPrice from "components/params/realPrice";
import { useSelector } from "react-redux";
import { authSelector } from "store/selectors/selectors";
import ModalInfo from "components/modalInfo/modalInfo";
import { useNavigate } from "react-router-dom";
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
  const typesList = ["тонкое", "традиционное"];
  const sizesList = ["26", "30", "36"];
  const [activeType, setActiveType] = useState(typesList[0]);
  const [activeSize, setActiveSize] = useState(sizesList[0]);
  const [modalAddStyle, setModalAddStyle] = useState(null);
  const [openModalInfo, setOpenModalInfo] = useState(null);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(pizzaPrice);
  const auth = useSelector(authSelector);
  const navigate = useNavigate();

  const countPlus = () => {
    return auth.isAuth
      ? setCount(count + 1)
      : (setOpenModalInfo("modal-display"),
        setTimeout(() => {
          setOpenModalInfo(null);
          navigate("/login", { replace: true });
        }, 1500));
  };

  return (
    <>
      <div className={styles.card}>
        <a onClick={() => setModalAddStyle("modal-display")} href="#">
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
        <Params
          onChange={(e) => {
            realPrice(e, pizzaPrice, setPrice, price);
          }}
          typeName={`type-${pizzaName}`}
          sizeName={`size-${pizzaName}`}
          typesList={typesList}
          activeType={activeType}
          setActiveType={setActiveType}
          sizesList={sizesList}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
        <div className={styles.card__bottom}>
          <span className={styles.card__bottom_price}>{price * (count > 1 ? count : 1)}р</span>
          <Button handler={countPlus} className="button--product">
            <span className={styles.card__bottom_span}>+</span>
            Добавить
            <span className={styles.card__bottom_span}>{count}</span>
          </Button>
        </div>
      </div>
      <ModalProduct
        onClick={countPlus}
        handler={() => setModalAddStyle(null)}
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
      <ModalInfo display={openModalInfo} title="Сначала пройдите авторизацию!" />
    </>
  );
};

export default Card;
