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
import Picture from "components/picture/picture";
import FormCard from "components/form/components/form-card/form-card";
import { useDispatch, useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import { addPizzaAction, delPizzaAction, updatePizzaAction } from "store/actions/pizzaActions";
import ModalInfo from "components/modalInfo/modalInfo";
import ModalWarn from "components/modalWarn/modalWarn";
import modalAddStyles from "../../components/modalEdit/modalEdit.module.scss";

const Products = () => {
  const pizzas = useSelector(pizzaSelector);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  const [modalAddStyle, setModalAddStyle] = useState(null);
  const [modalEditStyle, setModalEditStyle] = useState(null);
  const [openModalInfoName, setOpenModalInfoName] = useState(null);
  // const [openModalWarn, setOpenModalWarn] = useState(null);
  const [openModalInfoEditPizza, setOpenModalInfoEditPizza] = useState(null);
  const [newPizza, setNewPizza] = useState({
    id: 1,
    image: "",
    name: "",
    category: "",
    ingredients: "",
    price: "",
    proteins: "",
    fats: "",
    carbohydrates: "",
    energy: "",
    helf: "",
  });

  const [editPizza, setEditPizza] = useState({
    id: 1,
    image: "",
    name: "",
    category: "",
    ingredients: "",
    price: "",
    proteins: "",
    fats: "",
    carbohydrates: "",
    energy: "",
    helf: ""
  });

  const addModalPizza = () => {
    setModalAddStyle("modal-display");
  };

  const editPizzaModal = (e) => {
    setEditPizza(pizzas.find((item) => item.name === e.target.name))
    setModalEditStyle("modal-display");
  };

  const deleteThisPizza = (e) => {
    const thisDelPizza = pizzas.find((item) => item.name === e.target.name);
    dispatch(delPizzaAction(thisDelPizza));
  };

  const close = () => {
    setModalAddStyle(null);
    setModalEditStyle(null);
  };

  const handleChange = (e) => {
    setNewPizza({
      ...newPizza,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "image") {
      setNewPizza({
        ...newPizza,
        image: `uploads/pizzas/${e.target.files[0].name}`,
      });
    }
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const addNewPizza = () => {
    const existingPizza = pizzas.find((item) => item.name === newPizza.name);
    existingPizza
      ? (setOpenModalInfoName("modal-display"),
        setTimeout(() => {
          setOpenModalInfoName(null);
        }, 1500))
      : (dispatch(addPizzaAction(newPizza)), setModalAddStyle(null));
  };

  const handleEdit = (e) => {
    setEditPizza({
      ...editPizza,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "image") {
      setEditPizza({
        ...editPizza,
        image: `uploads/pizzas/${e.target.files[0].name}`,
      });
    }
  }

  const updatePizza = () => {
    dispatch(updatePizzaAction(editPizza));
    setOpenModalInfoEditPizza("modal-display");
    setTimeout(() => {
      setOpenModalInfoEditPizza(null);
      setModalEditStyle(null);
    }, 1500);
  }

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
                <TableCard key={pizza.id}>
                  <TableCardItem text={pizza.id} />
                  <TableCardItem>
                    <Picture src={`http://localhost:3000/${pizza.image}`} />
                  </TableCardItem>
                  <TableCardItem text={pizza.name} />
                  <TableCardItem text={pizza.category} />
                  <TableCardItem text={pizza.ingredients} className="table__item--big" />
                  <TableCardItem text={`${pizza.price}р`} />
                  <TableCardItem>
                    <Button name={pizza.name} handler={editPizzaModal} className="button--edit">
                      <Edit />
                    </Button>
                  </TableCardItem>
                  <TableCardItem>
                    <Button name={pizza.name} handler={deleteThisPizza} className="button--edit">
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
            <Button handler={addModalPizza} className="button--default" text="Добавить" />
          </SectionFooter>
        </SectionContent>
      </Section>
      <ModalEdit display={modalAddStyle} title="Добавить пиццу" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={imageUrl} />
        <label>
          <span>Добавить фото</span>
          <input
            name="image"
            onChange={handleChange}
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard
          onChange={handleChange}
          name="name"
          title="Название"
          type="text"
          placeholder="Название"
        />
        <FormCard
          onChange={handleChange}
          name="category"
          title="Категория"
          type="text"
          placeholder="Категория"
        />
        <FormCard
          onChange={handleChange}
          name="ingredients"
          title="Ингредиенты"
          type="text"
          placeholder="Ингредиенты"
        />
        <FormCard
          onChange={handleChange}
          name="price"
          title="Цена"
          type="number"
          placeholder="Цена"
        />
        <FormCard
          onChange={handleChange}
          name="proteins"
          title="Белки"
          type="number"
          placeholder="Белки"
        />
        <FormCard
          onChange={handleChange}
          name="fats"
          title="Жиры"
          type="number"
          placeholder="Жиры"
        />
        <FormCard
          onChange={handleChange}
          name="carbohydrates"
          title="Углеводы"
          type="number"
          placeholder="Углеводы"
        />
        <FormCard
          onChange={handleChange}
          name="energy"
          title="Калории"
          type="number"
          placeholder="Калории"
        />
        <FormCard
          onChange={handleChange}
          name="helf"
          title="Вес"
          type="number"
          placeholder="Вес(26см)"
        />
        <Button handler={addNewPizza} className="button--size-m" text="Добавить" />
      </ModalEdit>
      <ModalEdit display={modalEditStyle} title="Изменить пиццу" handler={close}>
        <Picture className={modalAddStyles["modal-edit__image"]} src={editPizza.image && `http://localhost:3000/${editPizza.image}`} />
        <label>
          <span>Изменить фото</span>
          <input
            name="image"
            onChange={handleEdit}
            className={modalAddStyles["modal-edit__input"]}
            type="file"
          />
        </label>
        <FormCard
          onChange={handleEdit}
          name="name"
          title="Название"
          type="text"
          placeholder="Название"
          value={editPizza.name}
        />
        <FormCard
          onChange={handleEdit}
          name="category"
          title="Категория"
          type="text"
          placeholder="Категория"
          value={editPizza.category}
        />
        <FormCard
          onChange={handleEdit}
          name="ingredients"
          title="Ингредиенты"
          type="text"
          placeholder="Ингредиенты"
          value={editPizza.ingredients}
        />
        <FormCard
          onChange={handleEdit}
          name="price"
          title="Цена"
          type="number"
          placeholder="Цена"
          value={editPizza.price}
        />
        <FormCard
          onChange={handleEdit}
          name="proteins"
          title="Белки"
          type="number"
          placeholder="Белки"
          value={editPizza.proteins}
        />
        <FormCard
          onChange={handleEdit}
          name="fats"
          title="Жиры"
          type="number"
          placeholder="Жиры"
          value={editPizza.fats}
        />
        <FormCard
          onChange={handleEdit}
          name="carbohydrates"
          title="Углеводы"
          type="number"
          placeholder="Углеводы"
          value={editPizza.carbohydrates}
        />
        <FormCard
          onChange={handleEdit}
          name="energy"
          title="Калории"
          type="number"
          placeholder="Калории"
          value={editPizza.energy}
        />
        <FormCard
          onChange={handleEdit}
          name="helf"
          title="Вес"
          type="number"
          placeholder="Вес(26см)"
          value={editPizza.helf}
        />
        <Button handler={updatePizza} className="button--size-m" text="изменить" />
      </ModalEdit>
      <ModalInfo display={openModalInfoName} title="Пицца с таким названием уже есть!" />
      <ModalInfo display={openModalInfoEditPizza} title="Пицца успешно изменена!" />
      {/* <ModalWarn display={openModalWarn} handler={() => setOpenModalWarn("modal-display")} title="Вы уверены что хотите удалить пуццу?" /> */}
    </>
  );
};

export default Products;
