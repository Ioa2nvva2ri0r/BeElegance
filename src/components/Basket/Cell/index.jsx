import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import cell from './cell.module.scss';

const Cell = ({ cssClasses = [], content }) => {
  return (
    <td className={arrayStringToString([cell.main, ...cssClasses])}>
      {content}
    </td>
  );
};

Cell.propTypes = {
  cssClasses: PropTypes.array,
  content: PropTypes.any,
};

export default Cell;
