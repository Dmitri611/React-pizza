import React from "react";
import { Link } from "react-router-dom";
import Section from "components/section/section";
import Button from "components/button/button";
import SectionContent from "components/section/components/sectionContent/section-content";

const Admin = () => {
  return (
    <Section className="section__inner--size-s" title="Настройки">
      <SectionContent className="section__content">
        <Link to="/admin/products">
          <Button className="button--default" text="Пиццы" />
        </Link>
        <Link to="/admin/users">
          <Button className="button--default" text="Пользователи" />
        </Link>
        <Link to="/admin/promo-codes">
          <Button className="button--default" text="Промо коды" />
        </Link>
        <Link to="/admin/orders">
          <Button className="button--default" text="Заказы" />
        </Link>
      </SectionContent>
      <Link to="/">
        <Button className="button--size-m" text="Назад" />
      </Link>
    </Section>
  );
};

export default Admin;
