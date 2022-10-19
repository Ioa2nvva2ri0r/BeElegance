import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import desc from './desc.module.scss';

const Desc = ({ prop, cssClasses = {} }) => {
  const { title = '', paragraph1 = '', paragraph2 = '' } = prop;
  const { cssClassTitle = [], cssClassText = [] } = cssClasses;

  return (
    <>
      <h2 className={arrayStringToString([desc.title, ...cssClassTitle])}>
        {title}
      </h2>
      <p className={arrayStringToString([desc.text, ...cssClassText])}>
        {paragraph1}
        {paragraph2 !== '' && (
          <>
            <br />
            <br />
          </>
        )}
        {paragraph2}
      </p>
    </>
  );
};

Desc.propTypes = {
  prop: PropTypes.shape({
    title: PropTypes.string,
    paragraph1: PropTypes.string,
    paragraph2: PropTypes.string,
  }),
  cssClasses: PropTypes.shape({
    cssClassTitle: PropTypes.array,
    cssClassText: PropTypes.array,
  }),
};

export default Desc;
