import React from "react";
import Section from "../../components/section/section";
import Form from "../../components/form/form";
import FormCard from "../../components/form/form-card/form-card";
import FormBottom from "../../components/form/form-bottom/form-bottom";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

export default function Registration() {
  return (
    <Section className="section__inner--size-m" title="Регистрация">
      <Form>
        <FormCard
          title="Логин"
          type="text"
          placeholder="Логин"
          minLength="2"
          maxLength="20"
          pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
          description="2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква"
        />
        <FormCard
          title="Пароль"
          autocomplete="new-password"
          type="password"
          placeholder="Пароль"
          minlength="8"
          pattern=".{8,}"
          description="Минимум 8 символов"
        />
        <FormCard
          title="Почта"
          type="email"
          placeholder="Почта"
          minLength="8"
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          description="Укажите свою настоящую почту!"
        />
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button type="submit" className="button--size-m" text="Регистрация" />
        </FormBottom>
      </Form>
    </Section>
  );
}
