import React from "react";
import Section from "../../section/section";
import Form from "../../form/form";
import FormCard from "../../form/form-card/form-card";
import FormBottom from "../../form/form-bottom/form-bottom";
import Button from "../../button/button";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Section className="section__inner--size-m" title="Личный кабинет">
      <Form>
        <FormCard
          title="Имя"
          type="text"
          placeholder="Имя"
          minLength="2"
          pattern="^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$"
        />
        <FormCard
          title="Фамилия"
          type="text"
          placeholder="Фамилия"
          minLength="2"
          pattern="^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$"
        />
        <FormCard
          title="Номер телефона"
          type="tel"
          placeholder="Номер телефона"
          minLength="12"
          pattern="^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$"
        />
        <FormCard
          title="Адрес доставки"
          type="text"
          placeholder="Адрес доставки"
        />
        <FormCard
          title="Почта"
          type="email"
          placeholder="Почта"
          minLength="8"
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        />
        <Button className="button--size-m" text="История заказов" />
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button className="button--size-m" text="Удалить профиль" />
          <Button className="button--size-m" text="Изменить" />
          <Button className="button--size-m" type="submit" text="Выйти" />
        </FormBottom>
      </Form>
    </Section>
  );
}
