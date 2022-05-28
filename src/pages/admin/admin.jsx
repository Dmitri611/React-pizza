import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "components/section/section";
import Button from "components/button/button";
import SectionContent from "components/section/components/sectionContent/section-content";
import { useDispatch } from "react-redux";
import { updateAuthAction } from "store/actions/authActions";
import SectionFooter from "components/section/components/sectionFooter/sectionFooter";

const Admin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dispatch(updateAuthAction(false, false, null));
    navigate("/", { replace: true });
  };

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
        <SectionFooter>
      <Link to="/">
        <Button className="button--size-m" text="Назад" />
      </Link>
      <Button handler={exit} className="button--size-m" text="Выйти" />
      </SectionFooter>
      </SectionContent>
    </Section>
  );
};

export default Admin;
