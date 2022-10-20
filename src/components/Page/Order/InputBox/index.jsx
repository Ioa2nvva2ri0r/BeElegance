import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Styles
import inputBox from './inputBox.module.scss';

const InputBox = ({ title, arrayProp }) => {
  return (
    <li className={inputBox.container}>
      <h3 className={inputBox.title}>{title}</h3>
      <ul className={inputBox.input__list}>
        {arrayProp.map(({ el, prop }, index) => (
          <li key={`order-input-${index + 1}`} className={inputBox.input__item}>
            {el === 'input' ? (
              <input className={inputBox.input} {...prop} />
            ) : (
              el === 'textarea' && (
                <textarea className={inputBox.input} {...prop} />
              )
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

InputBox.propTypes = {
  title: PropTypes.string,
  arrayProp: PropTypes.array,
};

export default InputBox;
