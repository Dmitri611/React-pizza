import React from "react";
import styles from "./payment.module.scss";
import stylesInput from "./components/paymentInput/paymentInput.module.scss";
import PaymentForm from "./components/paymentForm/paymentForm";
import PaymentCard from "./components/paymentCard/paymentCard";
import PaymentInput from "./components/paymentInput/paymentInput";
import PaymentLabel from "./components/paymentLabel/paymentLabel";

export default function Payment() {
  return (
    <section className={styles.payment}>
      <div className={styles.payment__container}>
        <h1 className={styles.payment__title}>Куда доставить?</h1>
        <PaymentForm>
          <PaymentCard text="Введите адрес доставки">
            <PaymentInput type="text" placeholder="Улица" />
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Дом"
            />
          </PaymentCard>
          <PaymentCard>
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Квартира"
            />
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Подъезд"
            />
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Код двери"
            />
            <PaymentInput
              className="input--size-s"
              type="text"
              placeholder="Этаж"
            />
          </PaymentCard>
          <PaymentCard text="Введите название адреса">
            <PaymentInput type="text" placeholder="Название адреса" />
          </PaymentCard>
          <PaymentCard text="Выберите время доставки">
            <PaymentInput type="time" />
            <PaymentLabel text="Как можно быстрее" type="checkbox" />
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
            ></textarea>
          </PaymentCard>
        </PaymentForm>
      </div>
    </section>
  );
}
