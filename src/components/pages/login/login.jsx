import React from "react";
import Section from "../../../components/section/section";
import Form from "../../form/form";
import FormCard from "../../form/form-card/form-card";
import FormBottom from "../../form/form-bottom/form-bottom";
import { Link } from "react-router-dom";
import Button from "../../button/button";

export default function Login() {
  return (
    <Section className="section__inner--size-s" title="Вход">
      <Form>
        <FormCard
          title="Логин"
          type="text"
          placeholder="Логин"
          minLength="2"
          pattern="^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$"
          description="Введите ваш логин!"
        />
        <FormCard
          title="Пароль"
          type="text"
          placeholder="Пароль"
          minLength="8"
          autoComplete="current-password"
          pattern=".{8,}"
          description="Введите ваш пароль!"
        />
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button className="button--size-m" type="submit" text="Войти" />
        </FormBottom>
      </Form>
    </Section>
  );
}
