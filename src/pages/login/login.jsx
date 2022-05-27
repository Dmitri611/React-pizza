/* eslint-disable no-alert */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "components/section/section";
import Form from "components/form/form";
import FormCard from "components/form/components/form-card/form-card";
import FormBottom from "components/form/components/form-bottom/form-bottom";
import Button from "components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "store/selectors/selectors";
import { updateAuthAction } from "store/actions/authActions";

const Login = () => {
  const users = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    if (thisUser) {
      if (user.password === thisUser.password) {
        alert(`Пользователь ${user.login} успешно авторизован!`);
        navigate("/", { replace: true });
        if (thisUser.isAdmin === true) {
          dispatch(updateAuthAction(true, true, thisUser.login));
        } else {
          dispatch(updateAuthAction(false, true, thisUser.login));
        }
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
          required="required"
          name="login"
          title="Логин"
          type="text"
          placeholder="Логин"
          minLength="2"
          description="Введите ваш логин!"
          onChange={handleChange}
          autoComplete="on"
        />
        <FormCard
          required="required"
          name="password"
          title="Пароль"
          type="password"
          placeholder="Пароль"
          minLength="8"
          description="Введите ваш пароль!"
          onChange={handleChange}
          autoComplete="on"
        />
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button handler={checkUser} className="button--size-m" text="Войти" type="button" />
        </FormBottom>
      </Form>
    </Section>
  );
};

export default Login;
