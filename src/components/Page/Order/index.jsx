import React, { useState, useRef, useEffect } from 'react';
// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clothesDataAPI } from '../../../redux/slices/getDataClothesSlice';
import { orderDataAPI } from '../../../redux/slices/postDataOrderSlice';
import { setDataBasket } from '../../../redux/slices/dataStorageSlice';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
import dataForm from '../../../auxiliary-functions/dataform';
// Components
import StrongContent from '../../common/StrongContent';
import IconPreloader from '../../common/Icon/IconPreloader';
import InputBox from './InputBox';
// Styles
import order from './order.module.scss';

const Order = () => {
  // Router
  const navigate = useNavigate();
  // Redux
  const dispatch = useDispatch();
  const localStorage = useSelector((state) => state.clothesStorage.data);
  const { loading, response, error } = useSelector((state) => state.orderAPI);
  // Final Price Logic
  const totalPrice = localStorage
    .map(({ price, amount }) => price * amount)
    .reduce((prev, curr) => prev + curr, 0);
  const discount = [
    ...new Set(
      localStorage.length === 0
        ? [0]
        : localStorage.map((obj) => (obj.coupon ? obj.coupon.discount : 0))
    ),
  ][0];
  // React Ref
  const formRef = useRef();
  // React State
  const [cheked, setCheked] = useState(0);
  // Submit Form
  const submitForm = () => {
    const data = dataForm(formRef.current);
    data !== null &&
      dispatch(
        orderDataAPI({
          ...data,
          order: localStorage,
        })
      );
  };

  useEffect(() => {
    if (response && response !== null && response.message === 'OK') {
      dispatch(
        setDataBasket({
          option: {
            key: 'basket',
            method: 'CLEAR',
          },
        })
      );
      setTimeout(() => {
        dispatch(clothesDataAPI());
        navigate('/');
      }, 5000);
    }
  }, [response]);

  return (
    <form ref={formRef} className={order.form}>
      <ul className={order.list__input}>
        {[
          {
            title: 'Данные покупателя',
            array: [
              {
                el: 'input',
                prop: {
                  type: 'text',
                  name: 'name',
                  lang: 'ru',
                  minLength: 2,
                  maxLength: 20,
                  placeholder: 'Имя',
                  required: true,
                  'data-excep': '-',
                },
              },
              {
                el: 'input',
                prop: {
                  type: 'email',
                  name: 'email',
                  placeholder: 'E-mail',
                  required: true,
                },
              },
              {
                el: 'input',
                prop: {
                  type: 'tel',
                  name: 'tel',
                  placeholder: 'Телефон',
                  required: true,
                },
              },
            ],
          },
          {
            title: 'Адрес получателя',
            array: [
              {
                el: 'input',
                prop: {
                  type: 'text',
                  name: 'country',
                  lang: 'ru',
                  minLength: 2,
                  maxLength: 20,
                  placeholder: 'Страна',
                  required: true,
                  'data-excep': '-',
                },
              },
              {
                el: 'input',
                prop: {
                  type: 'text',
                  name: 'city',
                  lang: 'ru',
                  minLength: 2,
                  maxLength: 20,
                  placeholder: 'Город',
                  required: true,
                  'data-excep': '-',
                },
              },
              {
                el: 'input',
                prop: {
                  type: 'text',
                  name: 'street',
                  lang: 'ru',
                  minLength: 2,
                  maxLength: 20,
                  placeholder: 'Улица',
                  required: true,
                  'data-excep': '-',
                },
              },
              {
                el: 'input',
                prop: {
                  type: 'text',
                  name: 'house',
                  placeholder: 'Дом',
                  required: true,
                  'data-excep': '-0-9',
                },
              },
              {
                el: 'input',
                prop: {
                  type: 'number',
                  name: 'apartment',
                  maxLength: 3,
                  placeholder: 'Квартира',
                },
              },
            ],
          },
          {
            title: 'Комментарии',
            array: [
              {
                el: 'textarea',
                prop: { name: 'message', placeholder: 'Сообщение' },
              },
            ],
          },
        ].map(({ title, array }, index) => (
          <InputBox
            key={`order-inputbox-${index + 1}`}
            title={title}
            arrayProp={array}
          />
        ))}
      </ul>
      <div className={order.box__orderPayment}>
        <div className={order.order__box}>
          <h3 className={order.order__title}>Ваш заказ</h3>
          <ul className={order.order__list}>
            {localStorage.map(({ name, category, price }, index) => (
              <li
                className={order.order__item}
                key={`order-product-${index + 1}`}
              >
                <StrongContent
                  title={
                    <>
                      <span className={order.order__product_category}>
                        {category}
                      </span>
                      <span className={order.order__product_name}>{name}</span>
                    </>
                  }
                  content={`$${price}`}
                  cssClassObj={{
                    classNameBox: [order.order__product],
                    classNameTitle: [order.order__product_title],
                    classNameContent: [order.order__product_price],
                  }}
                />
              </li>
            ))}
            <li className={order.order__item}>
              <ul className={order.total__list}>
                {[
                  {
                    title: 'Подытог:',
                    content: `$${totalPrice}`,
                    cssClass: {
                      classNameBox: [order.total],
                    },
                  },
                  {
                    title: 'Скидка:',
                    content: `${discount}%`,
                    cssClass: {
                      classNameBox: [order.total],
                    },
                  },
                  {
                    title: 'Итого:',
                    content: `$${Math.round(
                      totalPrice - totalPrice * (discount / 100)
                    )}`,
                    cssClass: {
                      classNameBox: [order.total],
                      classNameTitle: [order.total__title],
                      classNameContent: [order.total__price],
                    },
                  },
                ].map(({ title, content, cssClass }, index) => (
                  <li
                    key={`order-total-${index + 1}`}
                    className={order.total__item}
                  >
                    <StrongContent
                      title={title}
                      content={content}
                      cssClassObj={cssClass ? cssClass : {}}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className={order.payment__box}>
          <h3 className={order.payment__title}>Способы оплаты</h3>
          <ul className={order.payment__list}>
            {[
              { value: 'cash', placeholder: 'Оплата наличными' },
              {
                value: 'cashless',
                placeholder: 'Оплата по карте',
              },
            ].map(({ value, placeholder }, index) => (
              <li
                key={`order-payment-${index + 1}`}
                className={order.payment__item}
              >
                <input
                  className={order.payment__input}
                  id={value}
                  name="payment"
                  type="radio"
                  value={value}
                  placeholder="Оплата"
                  onChange={() => setCheked(index)}
                  required={cheked === index}
                />
                <label className={order.payment__label} htmlFor={value}>
                  <span className={order.payment__input_icon}></span>
                  {placeholder}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className={order.btn__received}
          onClick={() => submitForm()}
        >
          Разместить заказ
          {loading && <IconPreloader />}
        </button>
        <p
          className={arrayStringToString([
            order.status,
            response !== null &&
              (error !== null ? order.status__err : order.status__ok),
          ])}
          role="alert"
        >
          {response !== null &&
            (error !== null
              ? 'Произошла ошибка, повторите попытку позже!'
              : 'Заказ успешно оформлен. Мы свяжемся с вами в ближайшее время!')}
        </p>
      </div>
    </form>
  );
};

export default Order;
