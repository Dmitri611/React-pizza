import React from "react";
import Button from "../../components/button/button";
import Section from "../../components/section/section";
import SectionContent from "../../components/section/sectionContent/section-content";
import SectionFooter from "../../components/section/sectionFooter/sectionFooter";
import Table from "../../components/table/table";
import { Link } from "react-router-dom";
import TableCard from "../../components/table/tableCard/tableCard";
import TableCardItem from "../../components/table/tableCard/tableCardItem/tableCardItem";
import TableCardItemTh from "../../components/table/tableCard/tableCardItem/tableCardItemTh";
import { Edit } from "../../assets/image/svg/draw.svg";
import { Delete } from "../../assets/image/svg/delete.svg";

export default function Users() {
  return (
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
              <Button className="button--edit">
                <Edit />
              </Button>
            </TableCardItem>
            <TableCardItem>
              <Button className="button--edit">
                <Delete />
              </Button>
            </TableCardItem>
          </TableCard>
        </Table>
        <SectionFooter>
          <Link to="/admin">
            <Button className="button--size-m" text="Назад" />
          </Link>
          <Button className="button--default" text="Добавить" />
        </SectionFooter>
      </SectionContent>
    </Section>
  );
}
