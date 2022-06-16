import React, { useState } from "react";
import Button from "components/button/button";
import Section from "components/section/section";
import SectionContent from "components/section/components/sectionContent/section-content";
import SectionFooter from "components/section/components/sectionFooter/sectionFooter";
import Table from "components/table/table";
import { Link } from "react-router-dom";
import TableCard from "components/table/components/tableCard/tableCard";
import TableCardItem from "components/table/components/tableCardItem/tableCardItem";
import TableCardItemTh from "components/table/components/tableCardItem/tableCardItemTh";
import Dropdown from "components/dropdown/dropdown";
import DropdownItem from "components/dropdown/dropdown-item/dropdown-item";

const Orders = () => {
  const [value, setValue] = useState("обработан");

  const [checked, setChecked] = useState(false);

  const change = (e) => {
    setChecked(!checked);
    setValue(e.target.innerText);
  };

  return (
    <Section className="section__inner--size-s" title="Заказы">
      <SectionContent>
        <Table>
          <TableCard>
            <TableCardItemTh text="№" />
            <TableCardItemTh text="Время" />
            <TableCardItemTh text="Товар" />
            <TableCardItemTh text="Цена" />
            <TableCardItemTh text="Количество" />
            <TableCardItemTh text="Итого" />
            <TableCardItemTh text="Статус" />
          </TableCard>
          <TableCard>
            <TableCardItem text="1" />
            <TableCardItem text="16:45" />
            <TableCardItem text="Пепперони тонкое 30см" />
            <TableCardItem text="10.13р" />
            <TableCardItem text="1" />
            <TableCardItem text="10.13р" />
            <TableCardItem>
              <Dropdown btnContent={value} handler={change} check={checked}>
                <DropdownItem handler={change} text="обработан" />
                <DropdownItem handler={change} text="отменен" />
                <DropdownItem handler={change} text="выполнен" />
              </Dropdown>
            </TableCardItem>
          </TableCard>
        </Table>
        <SectionFooter>
          <Link to="/admin">
            <Button className="button--size-m" text="Назад" />
          </Link>
        </SectionFooter>
      </SectionContent>
    </Section>
  );
};

export default Orders;
