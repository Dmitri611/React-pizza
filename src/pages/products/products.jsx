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
import { ReactComponent as Edit } from "assets/image/svg/draw.svg";
import { ReactComponent as Delete } from "assets/image/svg/delete.svg";
import ModalEdit from "components/modalEdit/modalEdit";
import ModalWarn from "components/modalWarn/modalWarn";
import Picture from "components/picture/picture";
import FormCard from "components/form/components/form-card/form-card";
import { useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import modalAddStyles from "../../components/modalEdit/modalEdit.module.scss";

const Products = () => {
  const [imageUrl, setImageUrl] = useState();

  const change = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setImageUrl(src);
  };

  const [defaultSrc, setDefaultSrc] = useState("uploads/pizzas/pepperoni.webp");

  const def = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setDefaultSrc(src);
  };

  const [modalAddStyle, setModalAddStyle] = useState(null);
  const [modalEditStyle, setModalEditStyle] = useState(null);
  const [modalWarnStyle, setModalWarnStyle] = useState(null);

  const style = "modal-display";

  const addPizza = () => {
    setModalAddStyle(style);
  };

  const editPizza = () => {
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

  const pizzas = useSelector(pizzaSelector);

  return (
    <>
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
            {pizzas.map((pizza) => {
              return (
                <TableCard key={pizza.name}>
                  <TableCardItem text={pizza.id} />
                  <TableCardItem>
                    <Picture src={pizza.image} />
                  </TableCardItem>
                  <TableCardItem text={pizza.name} />
                  <TableCardItem text={pizza.category} />
                  <TableCardItem text={pizza.ingredients} className="table__item--big" />
                  <TableCardItem text={`${pizza.price}р`} />
                  <TableCardItem>
                    <Button handler={editPizza} className="button--edit">
                      <Edit />
                    </Button>
                  </TableCardItem>
                  <TableCardItem>
                    <Button handler={modalWarn} className="button--edit">
                      <Delete />
                    </Button>
                  </TableCardItem>
                </TableCard>
              );
            })}
          </Table>
          <SectionFooter>
            <Link to="/admin">
              <Button className="button--size-m" text="Назад" />
            </Link>
            <Button handler={addPizza} className="button--default" text="Добавить" />
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalEdit display={modalAddStyle} title="Добавить пиццу" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={imageUrl} />
        <label>
          <span>Добавить фото</span>
          <input onChange={change} className={modalAddStyles["modal-edit__input"]} type="file" />
        </label>
        <FormCard title="Название" type="text" placeholder="Название" />
        <FormCard title="Категория" type="text" placeholder="Категория" />
        <FormCard title="Ингредиенты" type="text" placeholder="Ингредиенты" />
        <FormCard title="Цена" type="text" placeholder="Цена" />
        <Button className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit display={modalEditStyle} title="Изменить пиццу" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={defaultSrc} />
        <label>
          <span>Изменить фото</span>
          <input onChange={def} className={modalAddStyles["modal-edit__input"]} type="file" />
        </label>
        <FormCard title="Название" type="text" placeholder="Название" />
        <FormCard title="Категория" type="text" placeholder="Категория" />
        <FormCard title="Ингредиенты" type="text" placeholder="Ингредиенты" />
        <FormCard title="Цена" type="text" placeholder="Цена" />
        <Button type="submit" className="button--size-m" text="изменить" />
      </ModalEdit>
      <ModalWarn display={modalWarnStyle} handler={close} title="Вы уверены что хотите удалить эту пиццу?" />
    </>
  );
};

export default Products;
