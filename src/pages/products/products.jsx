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

import image from "../../uploads/pizzas/pepperoni.webp";

export default function Products() {
  return (
    <Section className="section__inner--size-s" title="Пиццы">
      <SectionContent>
        <Table>
          <TableCard>
            <TableCardItemTh text="№" />
            <TableCardItemTh text="Картинка" />
            <TableCardItemTh text="Название" />
            <TableCardItemTh text="Категория" />
            <TableCardItemTh text="Ингредиенты" />
            <TableCardItemTh text="Стоимость" />
            <TableCardItemTh text="Изменить" />
            <TableCardItemTh text="Удалить" />
          </TableCard>
          <TableCard>
            <TableCardItem text="1" />
            <TableCardItem>
              <picture>
                <img src={image} alt="pizza" />
              </picture>
            </TableCardItem>
            <TableCardItem text="Пепперони" />
            <TableCardItem text="Мясная" />
            <TableCardItem text="Томатный соус, пикантная пепперони, моцарелла" />
            <TableCardItem text="От 10.13р" />
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
