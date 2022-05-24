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

const Users = () => {
  const [modalAddStyle, setModalAddStyle] = useState(null);
  const [modalEditStyle, setModalEditStyle] = useState(null);
  const [modalWarnStyle, setModalWarnStyle] = useState(null);

  const style = "modal-display";

  const addUser = () => {
    setModalAddStyle(style);
  };

  const editUser = () => {
    setModalEditStyle(style);
  };

  const modalWarn = () => {
    setModalWarnStyle(style);
  };

  const close = () => {
    setModalAddStyle(null);
    setModalWarnStyle(null);
    setModalEditStyle(null);
  };

  return (
    <>
      <Section className="section__inner--size-s" title="Пользователи">
        <SectionContent>
          <Table>
            <TableCard>
              <TableCardItemTh text="№" />
              <TableCardItemTh text="Статус" />
              <TableCardItemTh text="Имя" />
              <TableCardItemTh text="Фамилия" />
              <TableCardItemTh text="Почта" />
              <TableCardItemTh text="Телефон" />
              <TableCardItemTh text="Пароль" />
              <TableCardItemTh text="Изменить" />
              <TableCardItemTh text="Удалить" />
            </TableCard>
            <TableCard>
              <TableCardItem text="1" />
              <TableCardItem text="admin" />
              <TableCardItem text="Дмитрий" />
              <TableCardItem text="Новиков" />
              <TableCardItem text="dimkanov543@gmail.com" />
              <TableCardItem text="+375333910514" />
              <TableCardItem text="12345" />
              <TableCardItem>
                <Button handler={editUser} className="button--edit">
                  <Edit />
                </Button>
              </TableCardItem>
              <TableCardItem>
                <Button handler={modalWarn} className="button--edit">
                  <Delete />
                </Button>
              </TableCardItem>
            </TableCard>
          </Table>
          <SectionFooter>
            <Link to="/admin">
              <Button className="button--size-m" text="Назад" />
            </Link>
            <Button handler={addUser} className="button--default" text="Добавить" />
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalWarn display={modalWarnStyle} handler={close} />
      <ModalEdit display={modalAddStyle} title="Добавить пользователя" handler={close}>
        <FormCard title="Роль" type="text" placeholder="Статус" />
        <FormCard title="Имя" type="text" placeholder="Имя" />
        <FormCard title="Фамилия" type="text" placeholder="Фамилия" />
        <FormCard title="Почта" type="email" placeholder="Почта" />
        <FormCard title="Номер телефона" type="tel" placeholder="Номер телефона" />
        <FormCard title="Пароль" type="text" placeholder="Пароль" />
        <Button type="submit" className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit display={modalEditStyle} title="Изменить пользователя" handler={close}>
        <FormCard title="Роль" type="text" placeholder="Статус" /> 
        <FormCard title="Имя" type="text" placeholder="Имя" />
        <FormCard title="Фамилия" type="text" placeholder="Фамилия" />
        <FormCard title="Почта" type="email" placeholder="Почта" />
        <FormCard title="Номер телефона" type="tel" placeholder="Номер телефона" />
        <FormCard title="Пароль" type="text" placeholder="Пароль" />
        <Button type="submit" className="button--size-m" text="изменить" />
      </ModalEdit>
    </>
  );
};

export default Users;
