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
import bundle from "uploads/promo-codes/bundle.webp";
import { ReactComponent as Edit } from "assets/image/svg/draw.svg";
import { ReactComponent as Delete } from "assets/image/svg/delete.svg";
import FormCard from "components/form/components/form-card/form-card";
import ModalEdit from "components/modalEdit/modalEdit";
import ModalWarn from "components/modalWarn/modalWarn";
import Picture from "components/picture/picture";
import modalAddStyles from "components/modalEdit/modalEdit.module.scss";

const PromoCodes = () => {
  const [defaultSrc, setDefaultSrc] = useState(bundle);

  const def = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setDefaultSrc(src);
  };

  const [imageUrl, setImageUrl] = useState();

  const change = (e) => {
    const src = URL.createObjectURL(e.target.files[0]);
    setImageUrl(src);
  };

  const [modalAddStyle, setModalAddStyle] = useState(null);
  const [modalEditStyle, setModalEditStyle] = useState(null);
  const [modalWarnStyle, setModalWarnStyle] = useState(null);

  const style = "modal-display";

  const addPromo = () => {
    setModalAddStyle(style);
  };

  const editPromo = () => {
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
                <Picture src={bundle} />
              </TableCardItem>
              <TableCardItem text="NEW-EDA" />
              <TableCardItem text="Первая пицца бесплатно" />
              <TableCardItem text="100%" />
              <TableCardItem>
                <Button handler={editPromo} className="button--edit">
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
            <Button handler={addPromo} className="button--default" text="Добавить" />
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalWarn display={modalWarnStyle} handler={close} />
      <ModalEdit display={modalAddStyle} title="Добавить промо код" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={imageUrl} />
        <label htmlFor="inputqq">
          <span>Добавить бандл</span>
          <input
            onChange={change}
            id="inputqq"
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard title="Код" type="text" placeholder="Код" />
        <FormCard title="Название" type="text" placeholder="Название" />
        <FormCard title="Скидка" type="email" placeholder="%" />
        <Button type="submit" className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit display={modalEditStyle} title="Изменить промо код" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={defaultSrc} />
        <label htmlFor="inputqq">
          <span>Изменить бандл</span>
          <input
            onChange={def}
            id="inputqq"
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard title="Код" type="text" placeholder="Код" />
        <FormCard title="Название" type="text" placeholder="Название" />
        <FormCard title="Скидка" type="email" placeholder="%" />
        <Button type="submit" className="button--size-m" text="изменить" />
      </ModalEdit>
    </>
  );
};

export default PromoCodes;
