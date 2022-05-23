import Section from "components/section/section";
import SectionContent from "components/section/components/sectionContent/section-content";
import SectionFooter from "components/section/components/sectionFooter/sectionFooter";
import React from "react";
import Button from "components/button/button";
import { Link } from "react-router-dom";
import pizzaImage from "uploads/pizzas/pepperoni.webp";
import OrdersHistoryCard from "./components/ordersHistoryCard/ordersHistoryCard";
import OrdersHistoryImage from "./components/ordersHistoryImage/ordersHistoryImage";
import styles from "./ordersHistory.module.scss";

const OrdersHistory = () => {
  return (
    <Section className="section__inner--size-s" title="История заказов">
      <SectionContent>
        <div className={styles.content}>
          <OrdersHistoryCard
            number="№1"
            date="13 мая 2022г. 10:00"
            address="Московский проспект 70 к3"
            totalPrice="45р"
          >
            <OrdersHistoryImage src={pizzaImage} />
          </OrdersHistoryCard>
        </div>
        <SectionFooter className="section__footer--start">
          <Link to="/profile">
            <Button className="button--size-m" text="Назад" />
          </Link>
        </SectionFooter>
      </SectionContent>
    </Section>
  );
};

export default OrdersHistory;
