import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "components/button/button";
import ModalInfo from "components/modalInfo/modalInfo";
import { useSelector , useDispatch } from "react-redux";
import { authSelector, basketSelector } from "store/selectors/selectors";
import { delBasketItemAction } from "store/actions/basketActions";
import styles from "./paymentForm.module.scss";

const PaymentForm = ({ children }) => {

  const [openModalInfo, setOpenModalInfo] = useState(null);
  const auth = useSelector(authSelector);
  const navigate = useNavigate();
  const basket = useSelector(basketSelector);
  const dispatch = useDispatch();

  const openModal = () => {
    setOpenModalInfo('modal-display');
    setTimeout(() => {
      setOpenModalInfo(null);
      basket.map((item) => dispatch(delBasketItemAction(item.idPizza)));
      navigate("/", { replace: true });
    }, 2500);
  }

  return (
    <>
    <form className={styles.form} action="#">
      {children}
      <div className={styles.form__bottom}>
        <Link to="/basket">
          <Button className="button--size-m" text="Назад" />
        </Link>
        <Button handler={openModal} className="button--size-m" text="Подтвердить заказ" />
      </div>
    </form>
    <ModalInfo display={openModalInfo} title={`${auth.login}, Вам заказ принят, ожидайте звонка!`} />
    </>
  );
};

PaymentForm.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PaymentForm;
