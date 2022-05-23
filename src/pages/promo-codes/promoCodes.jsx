import React from "react";
import { Link } from "react-router-dom";
import Button from "components/button/button";
import Section from "components/section/section";
import SectionContent from "components/section/components/sectionContent/section-content";
import SectionFooter from "components/section/components/sectionFooter/sectionFooter";
import Table from "components/table/table";
import TableCard from "components/table/components/tableCard/tableCard";
import TableCardItem from "components/table/components/tableCardItem/tableCardItem";
import TableCardItemTh from "components/table/components/tableCardItem/tableCardItemTh";
import bundle from "uploads/promo-codes/bundle.webp";
import { ReactComponent as Edit } from "assets/image/svg/draw.svg";
import { ReactComponent as Delete } from "assets/image/svg/delete.svg";

const PromoCodes = () => {
  return (
    <Section className="section__inner--size-s" title="Промо коды">
      <SectionContent>
        <Table>
          <TableCard>
            <TableCardItemTh text="№" />
            <TableCardItemTh text="Постер" />
            <TableCardItemTh text="Код" />
            <TableCardItemTh text="Название" />
            <TableCardItemTh text="%" />
            <TableCardItemTh text="Изменить" />
            <TableCardItemTh text="Удалить" />
          </TableCard>
          <TableCard>
            <TableCardItem text="1" />
            <TableCardItem>
              <picture>
                <img src={bundle} alt="bundle" />
              </picture>
            </TableCardItem>
            <TableCardItem text="NEW-EDA" />
            <TableCardItem text="Первая пицца бесплатно" />
            <TableCardItem text="100%" />
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
};

export default PromoCodes;
