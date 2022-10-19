import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Styles
import picture from './picture.module.scss';

const Picture = ({ name, src, cssModule, additionalСssClass = [] }) => {
  const box = arrayStringToString([picture.img__box, cssModule.img__box]);
  const image = arrayStringToString([
    picture.img,
    cssModule.img,
    ...additionalСssClass,
  ]);

  return (
    <picture className={box}>
      <source className={image} srcSet={src} />
      <img className={image} src={src} alt={name} />
    </picture>
  );
};

Picture.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  cssModule: PropTypes.object,
  additionalСssClass: PropTypes.array,
};

export default Picture;
