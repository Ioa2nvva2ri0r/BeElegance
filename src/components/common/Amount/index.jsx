import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataBasket } from '../../../redux/slices/dataStorageSlice';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import styles from './amount.module.scss';

const Amount = ({ value, productID, cssClasses = [] }) => {
  // Redux
  const dispatch = useDispatch();
  const productlocalStorage = useSelector(
    (state) => state.clothesStorage.data.filter(({ id }) => id === productID)[0]
  );
  // React State
  const [amount, setAmount] = useState(1);
  // React Effect
  useEffect(() => setAmount(value ? value : 1), [value]);

  return (
    <>
      <label className={styles.label} htmlFor="amount">
        Количество
      </label>
      <input
        className={arrayStringToString([styles.main, ...cssClasses])}
        id="amount"
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => {
          const value = e.target.value;
          setAmount((value <= 0 || value > 10) && value !== '' ? 1 : value);
        }}
        onBlur={(e) => {
          const value = e.target.value;
          value === '' && setAmount(1);
          return (
            productlocalStorage &&
            dispatch(
              setDataBasket({
                option: {
                  key: 'basket-elegance',
                  method: 'PUT',
                  product: { ...productlocalStorage, amount: value },
                },
              })
            )
          );
        }}
      />
    </>
  );
};

Amount.propTypes = {
  value: PropTypes.any,
  productID: PropTypes.string,
  cssClasses: PropTypes.array,
};

export default Amount;
