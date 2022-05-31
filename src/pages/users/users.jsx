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
import { addUserAction, delUserAction, updateUserAction } from "store/actions/userActions";
import ModalInfo from "components/modalInfo/modalInfo";

const Users = () => {
  const users = useSelector(userSelector);
  const dispatch = useDispatch();
  const [openModalAdd, setOpenModalAdd] = useState(null);
  const [openModalEdit, setOpenModalEdit] = useState(null);
  const [openModalWarn, setOpenModalWarn] = useState(null);
  const [newUser, setNewUser] = useState({});
  const [delname, setDelname] = useState("");
  const [editUserInfo, setEditUserInfo] = useState({
    id: 1,
    login: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    tel: "",
    isAdmin: false,
  });

  const modalDel = (e) => {
    setOpenModalWarn("modal-display");
    setDelname(e.target.name);
  };

  const openModalEditUser = (e) => {
    setEditUserInfo(users.find((user) => user.login === e.target.name));
    setOpenModalEdit("modal-display");
  };

  const handleChangeAdd = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
    switch (e.target.value) {
      case "админ":
        return setNewUser({
          ...newUser,
          isAdmin: true,
        });
      default:
        return setNewUser({
          ...newUser,
          isAdmin: false,
        });
    }
  };

  const handleChangeEdit = (e) => {
    setEditUserInfo({
      ...editUserInfo,
      [e.target.name]: e.target.value,
    });
    if (e.target.value === "admin") {
      setEditUserInfo({
        ...editUserInfo,
        isAdmin: true,
      });
    } else if (e.target.value === "пользователь") {
      setEditUserInfo({
        ...editUserInfo,
        isAdmin: false,
      });
    }
  };

  const addUser = () => {
    dispatch(addUserAction(newUser));
  };

  const deluser = () => {
    const thisDelPizza = users.find((user) => user.login === delname);
    dispatch(delUserAction(thisDelPizza));
    setOpenModalWarn(null);
  };

  const editUser = () => {
    dispatch(updateUserAction(editUserInfo));
  };

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
            {users.map((user) => (
              <TableCard key={user.login}>
                <TableCardItem text={user.id} />
                <TableCardItem text={user.isAdmin ? "админ" : "пользователь"} />
                <TableCardItem text={user.login} />
                <TableCardItem text={user.firstName} />
                <TableCardItem text={user.lastName} />
                <TableCardItem text={user.address} />
                <TableCardItem text={user.email} />
                <TableCardItem text={user.tel} />
                <TableCardItem text={user.password} />
                <TableCardItem>
                  <Button name={user.login} handler={openModalEditUser} className="button--edit">
                    <Edit />
                  </Button>
                </TableCardItem>
                <TableCardItem>
                  <Button name={user.login} handler={modalDel} className="button--edit">
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
            <Button
              handler={() => setOpenModalAdd("modal-display")}
              className="button--default"
              text="Добавить"
            />
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalEdit
        display={openModalAdd}
        title="Добавить пользователя"
        handler={() => setOpenModalAdd(null)}
      >
        <FormCard
          name="isAdmin"
          onChange={handleChangeAdd}
          title="Роль"
          type="text"
          placeholder="Статус"
        />
        <FormCard
          name="login"
          onChange={handleChangeAdd}
          title="Логин"
          type="text"
          placeholder="Логин"
        />
        <FormCard
          name="firstName"
          onChange={handleChangeAdd}
          title="Имя"
          type="text"
          placeholder="Имя"
        />
        <FormCard
          name="lastName"
          onChange={handleChangeAdd}
          title="Фамилия"
          type="text"
          placeholder="Фамилия"
        />
        <FormCard
          name="address"
          onChange={handleChangeAdd}
          title="Адрес"
          type="text"
          placeholder="Адрес"
        />
        <FormCard
          name="email"
          onChange={handleChangeAdd}
          title="Почта"
          type="email"
          placeholder="Почта"
        />
        <FormCard
          name="tel"
          onChange={handleChangeAdd}
          title="Номер телефона"
          type="tel"
          placeholder="Номер телефона"
        />
        <FormCard
          name="password"
          onChange={handleChangeAdd}
          title="Пароль"
          type="text"
          placeholder="Пароль"
        />
        <Button handler={addUser} type="submit" className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit
        display={openModalEdit}
        title="Изменить пользователя"
        handler={() => setOpenModalEdit(null)}
      >
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.isAdmin}
          name="isAdmin"
          title="Роль"
          type="text"
          placeholder="Статус"
          description="true - админ, false - пользователь"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.login}
          name="login"
          title="Логин"
          type="text"
          placeholder="Логин"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.firstName}
          name="firstName"
          title="Имя"
          type="text"
          placeholder="Имя"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.lastName}
          name="lastName"
          title="Фамилия"
          type="text"
          placeholder="Фамилия"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.address}
          name="address"
          title="Адрес"
          type="text"
          placeholder="Адрес"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.email}
          name="email"
          title="Почта"
          type="email"
          placeholder="Почта"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.tel}
          name="tel"
          title="Номер телефона"
          type="tel"
          placeholder="Номер телефона"
        />
        <FormCard
          onChange={handleChangeEdit}
          value={editUserInfo.password}
          name="password"
          title="Пароль"
          type="text"
          placeholder="Пароль"
        />
        <Button handler={editUser} className="button--size-m" text="изменить" />
      </ModalEdit>
      <ModalWarn
        display={openModalWarn}
        handler={() => setOpenModalWarn(null)}
        handlerOk={deluser}
        title="Вы уверены что хотите удалить пользователя?"
      />
      <ModalInfo />
    </>
  );
};

export default Users;
