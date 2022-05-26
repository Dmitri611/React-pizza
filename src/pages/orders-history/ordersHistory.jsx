import Section from "components/section/section";
import SectionContent from "components/section/components/sectionContent/section-content";
import SectionFooter from "components/section/components/sectionFooter/sectionFooter";
import React, { useState } from "react";
import Button from "components/button/button";
import { Link } from "react-router-dom";
import Picture from "components/picture/picture";
import ModalOrder from "components/modalOrder/modalOrder";
import OrdersHistoryCard from "./ordersHistoryCard/ordersHistoryCard";
import styles from "./ordersHistory.module.scss";

const OrdersHistory = () => {
  const [modalAddStyle, setModalAddStyle] = useState(null);

  const style = "modal-display";

  const openModal = () => {
    setModalAddStyle(style);
  };

  const close = () => {
    setModalAddStyle(null);
  };

  return (
    <>
      <Section className="section__inner--size-s" title="История заказов">
        <SectionContent>
          <div className={styles.content}>
            <OrdersHistoryCard
              number="№1"
              date="13 мая 2022г. 10:00"
              address="Московский проспект 70 к3"
              totalPrice="45р"
              handler={openModal}
            >
              <Picture src="uploads/pizzas/pepperoni.webp" />
            </OrdersHistoryCard>
          </div>
          <SectionFooter className="section__footer--start">
            <Link to="/profile">
              <Button className="button--size-m" text="Назад" />
            </Link>
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalOrder display={modalAddStyle} handler={close} />
    </>
  );
};

export default OrdersHistory;
