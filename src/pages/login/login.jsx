/* eslint-disable no-alert */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "components/section/section";
import Form from "components/form/form";
import FormCard from "components/form/components/form-card/form-card";
import FormBottom from "components/form/components/form-bottom/form-bottom";
import Button from "components/button/button";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/selectors";

const Login = () => {
  const users = useSelector(userSelector);

  const [user, setUser] = useState({
    login: null,
    password: null,
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const checkUser = () => {
    const thisUser = users.find((item) => item.login === user.login);

    if(thisUser){
    if(user.password === thisUser.password){
      alert(`Пользователь ${user.login} успешно авторизован!`);
    } else {
      alert("Неправельный пароль!");
    }
  } else {
    alert(`Пользователь ${user.login} не найден!`);
  }
  };

  return (
    <Section className="section__inner--size-s" title="Вход">
      <Form>
        <FormCard
          name="login"
          title="Логин"
          type="text"
          placeholder="Логин"
          minLength="2"
          pattern="^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$"
          description="Введите ваш логин!"
          onChange={handleChange}
        />
        <FormCard
          name="password"
          title="Пароль"
          type="text"
          placeholder="Пароль"
          minLength="8"
          autoComplete="current-password"
          pattern=".{8,}"
          description="Введите ваш пароль!"
          onChange={handleChange}
        />
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button handler={checkUser} className="button--size-m" type="submit" text="Войти" />
        </FormBottom>
      </Form>
    </Section>
  );
};

export default Login;
