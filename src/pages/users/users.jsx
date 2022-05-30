import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/button/button";
import Section from "components/section/section";
import SectionContent from "components/section/components/sectionContent/section-content";
import SectionFooter from "components/section/components/sectionFooter/sectionFooter";
import Table from "components/table/table";
import TableCard from "components/table/components/tableCard/tableCard";
import TableCardItem from "components/table/components/tableCardItem/tableCardItem";
import TableCardItemTh from "components/table/components/tableCardItem/tableCardItemTh";
import { ReactComponent as Edit } from "assets/image/svg/draw.svg";
import { ReactComponent as Delete } from "assets/image/svg/delete.svg";
import ModalWarn from "components/modalWarn/modalWarn";
import ModalEdit from "components/modalEdit/modalEdit";
import FormCard from "components/form/components/form-card/form-card";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "store/selectors/selectors";
import { addUserAction } from "store/actions/userActions";
import ModalInfo from "components/modalInfo/modalInfo";

const Users = () => {
  const users = useSelector(userSelector);
  const dispatch = useDispatch();
  const [openModalAdd, setOpenModalAdd] = useState(null);
  const [modalEditStyle, setModalEditStyle] = useState(null);
  const [modalWarnStyle, setModalWarnStyle] = useState(null);
  const [newUser, setNewUser] = useState({});

  const handleChangeAdd = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
    switch (e.target.value) {
      case "админ":
        return setNewUser({
          ...newUser,
          isAdmin: true,
        })
      default:
        return setNewUser({
          ...newUser,
          isAdmin: false,
        })
    }
  }

  const addUser = () => {
    dispatch(addUserAction(newUser));
  }

  return (
    <>
      <Section className="section__inner--size-s" title="Пользователи">
        <SectionContent>
          <Table>
            <TableCard>
              <TableCardItemTh text="№" />
              <TableCardItemTh text="Статус" />
              <TableCardItemTh text="Логин" />
              <TableCardItemTh text="Имя" />
              <TableCardItemTh text="Фамилия" />
              <TableCardItemTh text="Адрес" />
              <TableCardItemTh text="Почта" />
              <TableCardItemTh text="Телефон" />
              <TableCardItemTh text="Пароль" />
              <TableCardItemTh text="Изменить" />
              <TableCardItemTh text="Удалить" />
            </TableCard>
            {users.map(user => (
              <TableCard key={user.login}>
              <TableCardItem text={user.id} />
              <TableCardItem text={user.isAdmin ? "админ": "пользователь"} />
              <TableCardItem text={user.login} />
              <TableCardItem text={user.firstName} />
              <TableCardItem text={user.lastName} />
              <TableCardItem text={user.address} />
              <TableCardItem text={user.email} />
              <TableCardItem text={user.tel} />
              <TableCardItem text={user.password} />
              <TableCardItem>
                <Button handler={() => setModalEditStyle("modal-display")} className="button--edit">
                  <Edit />
                </Button>
              </TableCardItem>
              <TableCardItem>
                <Button handler={() => setModalWarnStyle("modal-display")} className="button--edit">
                  <Delete />
                </Button>
              </TableCardItem>
            </TableCard>
            ))}
          </Table>
          <SectionFooter>
            <Link to="/admin">
              <Button className="button--size-m" text="Назад" />
            </Link>
            <Button handler={() => setOpenModalAdd("modal-display")} className="button--default" text="Добавить" />
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalEdit display={openModalAdd} title="Добавить пользователя" handler={() => setOpenModalAdd(null)}>
        <FormCard name="isAdmin" onChange={handleChangeAdd} title="Роль" type="text" placeholder="Статус" />
        <FormCard name="login" onChange={handleChangeAdd} title="Логин" type="text" placeholder="Логин" />
        <FormCard name="firstName" onChange={handleChangeAdd} title="Имя" type="text" placeholder="Имя" />
        <FormCard name="lastName" onChange={handleChangeAdd} title="Фамилия" type="text" placeholder="Фамилия" />
        <FormCard name="address" onChange={handleChangeAdd} title="Адрес" type="text" placeholder="Адрес" />
        <FormCard name="email" onChange={handleChangeAdd} title="Почта" type="email" placeholder="Почта" />
        <FormCard name="tel" onChange={handleChangeAdd} title="Номер телефона" type="tel" placeholder="Номер телефона" />
        <FormCard name="password" onChange={handleChangeAdd} title="Пароль" type="text" placeholder="Пароль" />
        <Button handler={addUser} type="submit" className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit display={modalEditStyle} title="Изменить пользователя" handler={() => setModalEditStyle(null)}>
        <FormCard title="Роль" type="text" placeholder="Статус" />
        <FormCard title="Логин" type="text" placeholder="Логин" />
        <FormCard title="Имя" type="text" placeholder="Имя" />
        <FormCard title="Фамилия" type="text" placeholder="Фамилия" />
        <FormCard title="Адрес" type="text" placeholder="Адрес" />
        <FormCard title="Почта" type="email" placeholder="Почта" />
        <FormCard title="Номер телефона" type="tel" placeholder="Номер телефона" />
        <FormCard title="Пароль" type="text" placeholder="Пароль" />
        <Button type="submit" className="button--size-m" text="изменить" />
      </ModalEdit>
      <ModalWarn display={modalWarnStyle} handler={() => setModalWarnStyle(null)} title="Вы уверены что хотите удалить пользователя?" />
      <ModalInfo />
    </>
  );
};

export default Users;
