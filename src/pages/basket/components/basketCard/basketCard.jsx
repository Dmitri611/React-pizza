import React from "react";
import styles from "./basketCard.module.scss";

const BasketCard = () => {
  return (
    <div className="basket-card">
      <div className="basket-card__product">
        <picture>
          <img
            className="basket-card__product-image"
            src="../../img/pizzas/Пепперони.webp"
            alt="pizza"
          />
        </picture>
        <div className="basket-card__product-text">
          <p className="basket-card__product-heading">Пепперони</p>
          <p className="basket-card__product-desc">тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className="basket-card__quantity">
        <button className="button button--size-s">−</button>
        <input
          className="basket-card__quantity-number"
          type="number"
          min="1"
          max="99"
          size="1"
          value="1"
        />
        <button className="button button--size-s">+</button>
      </div>
      <p className="basket-card__price">15 p</p>
      <button className="button button--edit">
        <svg
          className="table__block-svg"
          fill="#181818"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
        </svg>
      </button>
    </div>
  );
};

export default BasketCard;
