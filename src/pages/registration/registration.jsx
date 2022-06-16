import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "components/section/section";
import Form from "components/form/form";
import FormCard from "components/form/components/form-card/form-card";
import FormBottom from "components/form/components/form-bottom/form-bottom";
import Button from "components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "store/actions/userActions";
import { userSelector } from "store/selectors/selectors";
import ModalInfo from "components/modalInfo/modalInfo";

const Registration = () => {
  const users = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalInfoLogin, setModalInfoLogin] = useState(null);
  const [modalInfoEmail, setModalInfoEmail] = useState(null);
  const [modalInfoAccess, setModalInfoAccess] = useState(null);

  const [newUser, setNewUser] = useState({
    login: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
    address: null,
    tel: null,
    isAdmin: false,
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = () => {
    const loginUser = users.find((item) => item.login === newUser.login);
    const loginEmail = users.find((item) => item.email === newUser.email);

    loginUser
      ? loginEmail
        ? (setModalInfoEmail("modal-display"),
          setTimeout(() => {
            setModalInfoEmail(null);
          }, 1500))
        : (setModalInfoLogin("modal-display"),
          setTimeout(() => {
            setModalInfoLogin(null);
          }, 1500))
      : loginEmail
      ? (setModalInfoEmail("modal-display"),
        setTimeout(() => {
          setModalInfoEmail(null);
        }, 1500))
      : (
        dispatch(addUserAction(newUser)),
        setModalInfoAccess('modal-display'),
        setTimeout(() => {
          setModalInfoAccess(null);
          navigate("/login", { replace: true })
        }, 1500)
        )
  };

  return (
    <>
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
      <ModalInfo display={modalInfoEmail} title="На эту почту уже зарегистрирован пользователь!" />
      <ModalInfo display={modalInfoLogin} title="Этот логин занят!" />
      <ModalInfo display={modalInfoAccess} title={`Пользователь "${newUser.login}" успешно зарегистрирован!`} />
    </>
  );
};

export default Registration;
