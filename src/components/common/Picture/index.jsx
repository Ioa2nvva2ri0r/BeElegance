import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// lazysizes Image
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// Styles
import picture from './picture.module.scss';
// Icon
import lazyImg from '../../common/Icon/lazy-img.svg';

const Picture = ({ name, src, cssModule, additionalСssClass = [] }) => {
  const box = arrayStringToString([picture.img__box, cssModule.img__box]);
  const image = arrayStringToString([
    picture.img,
    cssModule.img,
    'lazyload',
    ...additionalСssClass,
  ]);

  return (
    <picture className={box}>
      <source className={image} srcSet={lazyImg} data-srcset={src} />
      <img className={image} src={lazyImg} data-src={src} alt={name} />
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
