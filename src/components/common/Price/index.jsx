import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import price from './price.module.scss';

const Price = ({ prop, cssModule }) => {
  const { current, discount } = prop;

  return (
    <strong
      className={arrayStringToString([price.price, cssModule.price])}
      role="note"
      aria-label="Цена"
    >
      {discount && (
        <span
          className={arrayStringToString([
            price.price__new,
            cssModule.price__new,
          ])}
        >
          ${discount}
        </span>
      )}
      <span
        className={arrayStringToString([
          price.price__current,
          cssModule.price__current,
          discount && price.price__current_noActive,
          discount && cssModule.price__current_noActive,
        ])}
      >
        ${current}
      </span>
    </strong>
  );
};

Price.propTypes = {
  prop: PropTypes.shape({
    current: PropTypes.number,
    discount: PropTypes.number,
  }),
  cssModule: PropTypes.object,
};

export default Price;
