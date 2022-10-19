import React, { useState, useRef } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { orderDataAPI } from '../../redux/slices/postDataOrderSlice';
// Yandex Map
import { YMaps, Map, Placemark } from 'react-yandex-maps';
// Auxiliary Functions
import dataForm from '../../auxiliary-functions/dataform';
// Components
import Skeleton from '../common/Skeleton';
import Email from '../common/Email';
import Tel from '../common/Tel';
// Styles
import contacts from './contacts.module.scss';

const Contacts = () => {
  // Redux
  const dispatch = useDispatch();
  // React State
  const [mapLoad, setMapLoad] = useState(true);
  // React Ref
  const formRef = useRef();
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

  return (
    <div className={contacts.container}>
      <YMaps>
        {mapLoad && (
          <Skeleton
            option={{
              width: 1200,
              height: 476,
            }}
            content={
              <rect x="0" y="0" rx="0" ry="0" width="1200" height="476" />
            }
          />
        )}
        <Map
          onLoad={() => setMapLoad(false)}
          defaultState={{
            center: [55.75306419329221, 37.62320956525957],
            zoom: 11,
          }}
          className={contacts.map}
        >
          {[
            [55.72518308677409, 37.66706240674588],
            [55.80408606892203, 37.571282000040924],
          ].map((coordinate, i) => (
            <Placemark key={`placemark-${i + 1}`} geometry={coordinate} />
          ))}
        </Map>
      </YMaps>
      <ul className={contacts.address}>
        {[
          {
            title: 'Телефон',
            content: <Tel className={contacts.address__tel} />,
          },
          {
            title: 'E-mail',
            content: <Email cssClass={contacts.address__email} />,
          },
          {
            title: 'Адрес',
            content: (
              <address className={contacts.address__desc}>
                г. Москва, ул. Мельникова, 25
                <br />
                г. Москва, 1-я Хуторская улица, 5
              </address>
            ),
          },
        ].map(({ title, content }, index) => (
          <li
            key={`address-item-${index + 1}`}
            className={contacts.address__item}
          >
            <h3 className={contacts.address__title}>{title}</h3>
            {content}
          </li>
        ))}
      </ul>
      <form ref={formRef} className={contacts.form}>
        <h2 className={contacts.form__title}>Напишите нам</h2>
        <ul className={contacts.form__list}>
          {[
            {
              type: 'text',
              name: 'name',
              lang: 'ru',
              minLength: 2,
              maxLength: 20,
              placeholder: 'Имя',
              required: true,
              'data-excep': '-',
            },
            {
              type: 'email',
              name: 'email',
              placeholder: 'E-mail',
              required: true,
            },
            {
              type: 'tel',
              name: 'tel',
              placeholder: 'Телефон',
              required: true,
            },
          ].map((obj, index) => (
            <li
              key={`contacts-item-${1 + index}`}
              className={contacts.form__item}
            >
              <input
                className={contacts.form__input}
                {...obj}
                autoComplete="off"
              />
            </li>
          ))}
          <li className={contacts.form__item}>
            <textarea
              className={contacts.form__textarea}
              name="message"
              placeholder="Сообщение"
            />
          </li>
        </ul>
        <button
          type="button"
          className={contacts.form__btn}
          onClick={() => submitForm()}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Contacts;
