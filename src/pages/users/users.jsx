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
                <svg
                  fill="#181818"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                </svg>
              </Button>
            </TableCardItem>
            <TableCardItem>
              <Button className="button--edit">
                <svg
                  fill="#181818"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                </svg>
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
