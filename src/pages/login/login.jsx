import React from "react";
import { Link } from "react-router-dom";
import Section from "components/section/section";
import Form from "components/form/form";
import FormCard from "components/form/components/form-card/form-card";
import FormBottom from "components/form/components/form-bottom/form-bottom";
import Button from "components/button/button";

const Login = () => {
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
};

export default Login;
