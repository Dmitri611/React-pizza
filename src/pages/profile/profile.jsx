/* eslint-disable no-alert */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "components/section/section";
import Form from "components/form/form";
import FormCard from "components/form/components/form-card/form-card";
import FormBottom from "components/form/components/form-bottom/form-bottom";
import Button from "components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userSelector } from "store/selectors/selectors";
import { updateUserAction } from "store/actions/userActions";
import { updateAuthAction } from "store/actions/authActions";

const Profile = () => {
  const users = useSelector(userSelector);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const authUser = users.find((item) => item.login === auth.login);

  const [newInfo, setNewInfo] = useState({
    email: authUser.email,
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    address: authUser.address,
    tel: authUser.tel,
  });

  const handleCange = (e) => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value,
    });
  };

  const updateUserInfo = () => {
    dispatch(updateUserAction({...authUser, ...newInfo}));
    alert("Вы изменили свои данные!");
  }

  const exit = () => {
    dispatch(updateAuthAction(false, false, null));
    navigate("/", { replace: true });
  }

  return (
    <Section className="section__inner--size-m" title="Личный кабинет">
      <Form>
        <FormCard
          onChange={handleCange}
          value={newInfo.firstName}
          name="firstName"
          title="Имя"
          type="text"
          placeholder="Имя"
          minLength="2"
          pattern="^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$"
        />
        <FormCard
          onChange={handleCange}
          value={newInfo.lastName}
          name="lastName"
          title="Фамилия"
          type="text"
          placeholder="Фамилия"
          minLength="2"
          pattern="^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$"
        />
        <FormCard
          onChange={handleCange}
          value={newInfo.tel}
          name="tel"
          title="Номер телефона"
          type="tel"
          placeholder="Номер телефона"
          minLength="12"
          pattern="^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$"
        />
        <FormCard
          onChange={handleCange}
          value={newInfo.address}
          name="address"
          title="Адрес доставки"
          type="text"
          placeholder="Адрес доставки"
        />
        <FormCard
          onChange={handleCange}
          value={newInfo.email}
          name="email"
          title="Почта"
          type="email"
          placeholder="Почта"
          minLength="8"
          pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        />
        <Link to="/profile/orders-history">
          <Button className="button--size-m" text="История заказов" />
        </Link>
        <FormBottom>
          <Link to="/">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button className="button--size-m" text="Удалить профиль" />
          <Button handler={updateUserInfo} className="button--size-m" text="Изменить" />
          <Button handler={exit} className="button--size-m" type="submit" text="Выйти" />
        </FormBottom>
      </Form>
    </Section>
  );
};

export default Profile;
