import React, { useEffect, useRef } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { orderDataAPI } from '../../redux/slices/postDataOrderSlice';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import dataForm from '../../auxiliary-functions/dataform';
// Components
import IconClose from '../common/Icon/IconClose';
// Styles
import modal from './modal.module.scss';

const Modal = ({ funCloseModal }) => {
  // Redux
  const dispatch = useDispatch();
  // React Ref
  const modalRef = useRef();
  const formRef = useRef();
  // React Effect
  const closeModal = () => {
    modalRef.current && modalRef.current.classList.add(modal.main__close);
    setTimeout(() => {
      funCloseModal(false);
    }, 390);
  };

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
        orderDataAPI({
          ...data,
        })
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
            Заказать звонок
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
      </form>
    </div>
  );
};

Modal.propTypes = {
  funCloseModal: PropTypes.func,
};

export default Modal;
