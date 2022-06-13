import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { promoSelector } from "store/selectors/selectors";
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
import FormCard from "components/form/components/form-card/form-card";
import ModalEdit from "components/modalEdit/modalEdit";
import ModalWarn from "components/modalWarn/modalWarn";
import Picture from "components/picture/picture";
import modalAddStyles from "components/modalEdit/modalEdit.module.scss";
import { addPromoAction, delPromoAction, updatePromoAction } from "store/actions/promoActions";

const PromoCodes = () => {
  const promos = useSelector(promoSelector);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const [openModalAdd, setOpenModalAdd] = useState(null);
  const [openModalEdit, setOpenModalEdit] = useState(null);
  const [openModalWarn, setOpenModalWarn] = useState(null);
  const [delname, setDelname] = useState("");
  const [newPromo, setNewPromo] = useState({
    id: 1,
    image: "",
    code: "",
    name: "",
    discount: "",
  });
  const [editPromo, setEditPromo] = useState({
    id: 1,
    image: "",
    code: "",
    name: "",
    discount: "",
  });

  const openModalDelete = (e) => {
    setOpenModalWarn("modal-display");
    setDelname(e.target.name);
  };

  const openModalEditPromo = (e) => {
    setEditPromo(promos.find((item) => item.code === e.target.name));
    setOpenModalEdit("modal-display");
  };

  const handleChangeAdd = (e) => {
    setNewPromo({
      ...newPromo,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "image") {
      setNewPromo({
        ...newPromo,
        image: `uploads/pizzas/${e.target.files[0].name}`,
      });
    }
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleChangeEdit = (e) => {
    setEditPromo({
      ...editPromo,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "image") {
      setEditPromo({
        ...editPromo,
        image: `uploads/pizzas/${e.target.files[0].name}`,
      });
    }
  };

  const addNewPromo = () => {
    dispatch(addPromoAction(newPromo));
  };

  const deletePromo = () => {
    const thisDelPromo = promos.find((item) => item.code === delname);
    dispatch(delPromoAction(thisDelPromo));
    setOpenModalWarn(null);
  };

  const updatePromo = () => {
    dispatch(updatePromoAction(editPromo));
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
            {promos.map((promo) => {
              return (
                <TableCard key={promo.code}>
                  <TableCardItem text={promo.id} />
                  <TableCardItem>
                    <Picture src={`http://localhost:3000/${promo.image}`} />
                  </TableCardItem>
                  <TableCardItem text={promo.code} />
                  <TableCardItem className="table__item--big" text={promo.name} />
                  <TableCardItem text={promo.discount} />
                  <TableCardItem>
                    <Button name={promo.code} handler={openModalEditPromo} className="button--edit">
                      <Edit />
                    </Button>
                  </TableCardItem>
                  <TableCardItem>
                    <Button name={promo.code} handler={openModalDelete} className="button--edit">
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
        title="Добавить промо код"
        handler={() => setOpenModalAdd(null)}
      >
        <Picture className={modalAddStyles["modal-edit__image"]} src={imageUrl} />
        <label>
          <span>Добавить бандл</span>
          <input
            onChange={handleChangeAdd}
            name="image"
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard
          onChange={handleChangeAdd}
          name="code"
          title="Код"
          type="text"
          placeholder="Код"
        />
        <FormCard
          onChange={handleChangeAdd}
          name="name"
          title="Название"
          type="text"
          placeholder="Название"
        />
        <FormCard
          onChange={handleChangeAdd}
          name="discount"
          title="Скидка"
          type="email"
          placeholder="%"
        />
        <Button handler={addNewPromo} type="submit" className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit
        display={openModalEdit}
        title="Изменить промо код"
        handler={() => setOpenModalEdit(null)}
      >
        <Picture
          className={modalAddStyles["modal-edit__image"]}
          src={editPromo.image && `http://localhost:3000/${editPromo.image}`}
        />
        <label>
          <span>Изменить бандл</span>
          <input
            name="image"
            onChange={handleChangeEdit}
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard
          value={editPromo.code}
          onChange={handleChangeEdit}
          name="code"
          title="Код"
          type="text"
          placeholder="Код"
        />
        <FormCard
          value={editPromo.name}
          onChange={handleChangeEdit}
          name="name"
          title="Название"
          type="text"
          placeholder="Название"
        />
        <FormCard
          value={editPromo.discount}
          onChange={handleChangeEdit}
          name="discount"
          title="Скидка"
          type="email"
          placeholder="%"
        />
        <Button handler={updatePromo} className="button--size-m" text="изменить" />
      </ModalEdit>
      <ModalWarn
        display={openModalWarn}
        handler={() => setOpenModalWarn(null)}
        title={`Вы уверены что хотите удалить промо код "${delname}"?`}
        handlerOk={deletePromo}
      />
    </>
  );
};

export default PromoCodes;
