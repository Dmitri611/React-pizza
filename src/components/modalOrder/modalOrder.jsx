import React from "react";
import Modal from "components/modal/modal";
import Button from "components/button/button";
import { ReactComponent as Close } from "assets/image/svg/delete.svg";
// import image from "uploads/pizzas/pepperoni.webp";
import PropTypes from "prop-types";
import ModalOrderBlock from "./components/modalOrderBlock/modalOrderBlock";
import ModalOrderProduct from "./components/modalOrderProduct/modalOrderProduct";
import styles from "./modalOrder.module.scss";

const ModalOrder = ({ display, handler }) => {
  return (
    <Modal
      display={display}
      container={styles["modal-order__container"]}
      content={styles["modal-order__content"]}
    >
      <div className={styles["modal-order__head"]}>
        <h2 className={styles["modal-order__title"]}>О заказе</h2>
        <Button handler={handler} className="button--reset">
          <Close />
        </Button>
      </div>
      <div className={styles["modal-order__body"]}>
        <ModalOrderBlock title="Номер заказа" text="№1" />
        <ModalOrderBlock title="Дата и время" text="13 мая 2022г. 10:00" />
        <ModalOrderBlock title="Адрес" text="Московский проспект 70 к3" />
        <ModalOrderBlock title="Товары">
          <ModalOrderProduct
            src="uploads/pizzas/pepperoni.webp"
            pizzaName="Двойная пепперони"
            pizzaDesc="тонкое тесто, 26 см."
            amount="1"
            price="15р"
          />
          <ModalOrderProduct
            src="uploads/pizzas/pepperoni.webp"
            pizzaName="Двойная пепперони"
            pizzaDesc="тонкое тесто, 26 см."
            amount="1"
            price="15р"
          />
          <ModalOrderProduct
            src="uploads/pizzas/pepperoni.webp"
            pizzaName="Двойная пепперони"
            pizzaDesc="тонкое тесто, 26 см."
            amount="1"
            price="15р"
          />
          <ModalOrderProduct
            src="uploads/pizzas/pepperoni.webp"
            pizzaName="Двойная пепперони"
            pizzaDesc="тонкое тесто, 26 см."
            amount="1"
            price="15р"
          />
          <ModalOrderProduct
            src="uploads/pizzas/pepperoni.webp"
            pizzaName="Двойная пепперони"
            pizzaDesc="тонкое тесто, 26 см."
            amount="1"
            price="15р"
          />
        </ModalOrderBlock>
        <ModalOrderBlock title="Сумма:" text="15р" />
      </div>
      <div className={styles["modal-order__bottom"]}>
        <Button className="button--size-m" text="повторить" />
      </div>
    </Modal>
  );
};

ModalOrder.propTypes = {
  display: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

ModalOrder.defaultProps = {
  display: null,
};

export default ModalOrder;
