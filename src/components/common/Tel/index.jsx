import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import tel from './tel.module.scss';

const Tel = ({ className }) => {
  return (
    <a
      href="tel:+74958235412"
      className={arrayStringToString([tel.main, className])}
    >
      +7 (495) 823-54-12
    </a>
  );
};

Tel.propTypes = {
  className: PropTypes.string,
};

export default Tel;
