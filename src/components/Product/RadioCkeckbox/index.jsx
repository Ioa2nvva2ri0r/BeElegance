import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { setDataBasket } from '../../../redux/slices/dataStorageSlice';
// Check Types
import PropTypes from 'prop-types';
// Styles
import checkbox from './checkbox.module.scss';

const RadioCkeckbox = ({ name, data, productDataBasket, active }) => {
  // Redux
  const dispatch = useDispatch();
  // React State
  const [cheked, setCheked] = useState(active ? active : data[0]);
  // React Effect
  useEffect(() => {
    setCheked(active ? active : data[0]);
  }, [active]);
  const changeDataBasket = (value) =>
    productDataBasket &&
    dispatch(
      setDataBasket({
        option: {
          key: 'basket',
          method: 'PUT',
          product: { ...productDataBasket, [name]: value },
        },
      })
    );

  return (
    <>
      <h2 className={checkbox.title}>
        Выберите {name === 'color' ? 'цвет' : name === 'size' && 'размер'} :
      </h2>
      <ul className={checkbox.list}>
        {data.map((value, id) => (
          <li key={`${name}-${id + 1}`} className={checkbox.item}>
            <input
              className={`${checkbox.input} ${
                name === 'color'
                  ? checkbox.input__color
                  : name === 'size' && checkbox.input__size
              }`}
              id={value}
              type="radio"
              name={name}
              value={value}
              checked={value === cheked}
              onChange={(e) => setCheked(e.target.value)}
              onClick={() => changeDataBasket(value)}
              onBlur={() => changeDataBasket(value)}
            />
            <label
              className={`${checkbox.label} ${
                name === 'color'
                  ? checkbox.label__color
                  : name === 'size' && checkbox.label__size
              }`}
              htmlFor={value}
              style={{ backgroundColor: value }}
              aria-label={
                name === 'size' ? 'Размер' : name === 'color' && 'Цвет'
              }
            >
              {value}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

RadioCkeckbox.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  productDataBasket: PropTypes.object,
  active: PropTypes.string,
};

export default RadioCkeckbox;
