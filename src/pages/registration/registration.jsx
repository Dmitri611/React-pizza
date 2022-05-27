/* eslint-disable no-alert */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "components/section/section";
import Form from "components/form/form";
import FormCard from "components/form/components/form-card/form-card";
import FormBottom from "components/form/components/form-bottom/form-bottom";
import Button from "components/button/button";
import { useDispatch } from "react-redux";
import { addUserAction } from "store/actions/userActions";

const Registration = () => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    login: null,
    password: null,
    email: null,
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = () => {
    dispatch(addUserAction(newUser));
    alert(`Пользователь ${newUser.login} прошел регистрацию!`);
  };

  return (
    <Section className="section__inner--size-m" title="Регистрация">
      <Form>
        <FormCard
          name="login"
          title="Логин"
          type="text"
          placeholder="Логин"
          minLength="2"
          maxLength="20"
          pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
          description="2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква"
          onChange={handleChange}
          autoComplete="on"
        />
        <FormCard
          name="password"
          title="Пароль"
          type="password"
          placeholder="Пароль"
          minlength="8"
          pattern=".{8,}"
          description="Минимум 8 символов"
          onChange={handleChange}
          autoComplete="on"
        />
        <FormCard
          title="Пароль"
          type="password"
          placeholder="Пароль"
          minlength="8"
          pattern=".{8,}"
          description="Повторите пароль"
          autoComplete="on"
        />
        <FormCard
          name="email"
          title="Почта"
          type="email"
          placeholder="Почта"
          minLength="8"
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          description="Укажите свою настоящую почту!"
          onChange={handleChange}
          autoComplete="on"
        />
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button handler={addUser} type="button" className="button--size-m" text="Регистрация" />
        </FormBottom>
      </Form>
    </Section>
  );
};

export default Registration;
