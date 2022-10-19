import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';

const StrongContent = ({ title, content, cssClassObj = {} }) => {
  const {
    classNameBox = [],
    classNameTitle = [],
    classNameContent = [],
  } = cssClassObj;

  return (
    <strong className={arrayStringToString([...classNameBox])}>
      <span className={arrayStringToString([...classNameTitle])}>{title}</span>
      <span className={arrayStringToString([...classNameContent])}>
        {content}
      </span>
    </strong>
  );
};

StrongContent.propTypes = {
  title: PropTypes.any,
  content: PropTypes.any,
  cssClassObj: PropTypes.shape({
    classNameBox: PropTypes.array,
    classNameTitle: PropTypes.array,
    classNameContent: PropTypes.array,
  }),
};

export default StrongContent;
