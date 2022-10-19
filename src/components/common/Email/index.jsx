import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import email from './email.module.scss';

const Email = ({ cssClass }) => {
  return (
    <a
      href="mailto:hello@be_elegante.gmail.com"
      className={arrayStringToString([email.main, cssClass])}
      aria-label="Электронная почта"
    >
      hello@be_elegante.gmail.com
    </a>
  );
};

Email.propTypes = {
  cssClass: PropTypes.string,
};

export default Email;
