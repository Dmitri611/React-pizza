import React from "react";
import stylesInput from "./components/paymentInput/paymentInput.module.scss";
import PaymentForm from "./components/paymentForm/paymentForm";
import PaymentCard from "./components/paymentCard/paymentCard";
import PaymentInput from "./components/paymentInput/paymentInput";
import PaymentLabel from "./components/paymentLabel/paymentLabel";
import styles from "./payment.module.scss";

const Payment = () => {
  return (
    <section className={styles.payment}>
      <div className={styles.payment__container}>
        <h1 className={styles.payment__title}>Куда доставить?</h1>
        <PaymentForm>
          <PaymentCard text="Введите адрес доставки">
            <PaymentInput type="text" placeholder="Улица" name="street" />
            <PaymentInput className="input--size-s" type="text" placeholder="Дом" name="home" />
          </PaymentCard>
          <PaymentCard>
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Квартира"
              name="kvartira"
            />
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Подъезд"
              name="podezd"
            />
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Код двери"
              name="code"
            />
            <PaymentInput className="input--size-s" type="text" placeholder="Этаж" name="etag" />
          </PaymentCard>
          <PaymentCard text="Введите название адреса">
            <PaymentInput type="text" placeholder="Название адреса" name="name-address" />
          </PaymentCard>
          <PaymentCard text="Выберите время доставки">
            <PaymentInput type="time" name="time" />
            <PaymentLabel text="Как можно быстрее" type="checkbox" name="faster" />
          </PaymentCard>
          <PaymentCard text="Выберите способ оплаты">
            <PaymentLabel text="Картой курьеру" type="radio" name="pay" />
            <PaymentLabel text="Наличкой курьеру" type="radio" name="pay" />
          </PaymentCard>
          <PaymentCard>
            <textarea
              className={stylesInput.input}
              rows="7"
              readOnly
              placeholder="Комментарий к заказу"
            />
          </PaymentCard>
        </PaymentForm>
      </div>
    </section>
  );
};

export default Payment;
