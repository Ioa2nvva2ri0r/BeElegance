import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Skeleton = ({ option, content }) => {
  const { viewBox, width, height, cssStyles, cssClass } = option;

  const prop = {
    ...(width && {
      width,
    }),
    ...(height && {
      height,
    }),
    viewBox: `0 0 ${width ? width : viewBox.width} ${
      height ? height : viewBox.height
    }`,
    ...(cssStyles && {
      style: cssStyles,
    }),
    ...(cssClass && {
      className: cssClass,
    }),
  };

  return (
    <ContentLoader
      speed={1}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f8f5f1"
      foregroundColor="#ecebeb"
      {...prop}
    >
      {content}
    </ContentLoader>
  );
};

Skeleton.propTypes = {
  option: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    cssStyles: PropTypes.object,
    cssClass: PropTypes.string,
  }),
  content: PropTypes.element,
};

export default Skeleton;
