import React, { useEffect, useRef, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { orderDataAPI } from '../../redux/slices/postDataOrderSlice';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import dataForm from '../../auxiliary-functions/dataform';
import { arrayStringToString } from '../../auxiliary-functions/сonvert';
// Components
import IconClose from '../common/Icon/IconClose';
import IconPreloader from '../common/Icon/IconPreloader';
// Styles
import modal from './modal.module.scss';

const Modal = ({ funCloseModal }) => {
  const closeModal = () => {
    modalRef.current && modalRef.current.classList.add(modal.main__close);
    setTimeout(() => {
      funCloseModal(false);
    }, 390);
  };
  // Redux
  const dispatch = useDispatch();
  const { loading, response, error } = useSelector((state) => state.orderAPI);
  // React State
  const [resMessage, setResMessage] = useState('');
  // React Ref
  const modalRef = useRef();
  const formRef = useRef();
  // React Effect
  useEffect(() => {
    if (response && response !== null) {
      setResMessage(
        error !== null
          ? 'Произошла ошибка, повторите попытку позже!'
          : 'Благодарим за оставленную заявку, в скором времени мы свяжемся с вами!'
      );
      setTimeout(() => {
        closeModal();
        setResMessage('');
        dispatch(orderDataAPI(null));
      }, 5000);
    }
  }, [response]);
  useEffect(() => {
    const handleClick = (e) => {
      if (
        !formRef.current.contains(e.target) &&
        !e.target.closest('#order-call')
      )
        return closeModal();
    };

    if (modalRef.current) document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);
  // Submit Form
  const submitForm = () => {
    const data = dataForm(formRef.current);
    data !== null &&
      dispatch(
        orderDataAPI(
          {
            ...data,
          },
          5000
        )
      );
  };

  return (
    <div ref={modalRef} className={modal.main}>
      <form ref={formRef} className={modal.form}>
        <div className={modal.form__container}>
          <h2 className={modal.form__title}>Заказать обратный звонок</h2>
          <ul className={modal.form__list}>
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
              <li key={`modal-item-${index + 1}`} className={modal.form__item}>
                <input className={modal.form__input} {...obj} />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={modal.form__btn_submit}
            onClick={() => submitForm()}
          >
            Заказать звонок {loading && <IconPreloader />}
          </button>
          <button
            type="button"
            className={modal.form__btn_close}
            aria-label="Закрыть модальное окно"
            onClick={() => closeModal()}
          >
            <IconClose />
          </button>
        </div>
        <p
          className={arrayStringToString([
            response !== null && modal.status,
            response !== null &&
              (error !== null ? modal.status__err : modal.status__ok),
          ])}
          role="alert"
        >
          {response !== null && resMessage}
        </p>
      </form>
    </div>
  );
};

Modal.propTypes = {
  funCloseModal: PropTypes.func,
};

export default Modal;
