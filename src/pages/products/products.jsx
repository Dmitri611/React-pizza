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
            <TableCard>
              <TableCardItem text="1" />
              <TableCardItem>
                <Picture src="uploads/pizzas/pepperoni.webp" />
              </TableCardItem>
              <TableCardItem text="Пепперони" />
              <TableCardItem text="Мясная" />
              <TableCardItem text="Томатный соус, пикантная пепперони, моцарелла" />
              <TableCardItem text="От 10.13р" />
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
        <label htmlFor="inputqq">
          <span>Добавить фото</span>
          <input
            onChange={change}
            id="inputqq"
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard title="Название" type="text" placeholder="Название" />
        <FormCard title="Категория" type="text" placeholder="Категория" />
        <FormCard title="Ингредиенты" type="text" placeholder="Ингредиенты" />
        <FormCard title="Цена" type="text" placeholder="Цена" />
        <Button type="submit" className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit display={modalEditStyle} title="Изменить пиццу" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={defaultSrc} />
        <label htmlFor="inputqq">
          <span>Изменить фото</span>
          <input
            onChange={def}
            id="inputqq"
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard title="Название" type="text" placeholder="Название" />
        <FormCard title="Категория" type="text" placeholder="Категория" />
        <FormCard title="Ингредиенты" type="text" placeholder="Ингредиенты" />
        <FormCard title="Цена" type="text" placeholder="Цена" />
        <Button type="submit" className="button--size-m" text="изменить" />
      </ModalEdit>
      <ModalWarn display={modalWarnStyle} handler={close} />
    </>
  );
};

export default Products;
