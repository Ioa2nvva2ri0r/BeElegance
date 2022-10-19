import React from 'react';
import PropTypes from 'prop-types';

const IconSlide = ({ direction }) => {
  return direction === 'prev' ? (
    <svg
      width="29"
      height="16"
      viewBox="0 0 29 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15"
        stroke="black"
      />
    </svg>
  ) : direction === 'next' ? (
    <svg
      width="29"
      height="16"
      viewBox="0 0 29 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1"
        stroke="black"
      />
    </svg>
  ) : (
    direction === 'down' && (
      <svg
        width="16"
        height="29"
        viewBox="0 0 16 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#6E9C9F" />
      </svg>
    )
  );
};

IconSlide.propTypes = {
  direction: PropTypes.string,
};

export default IconSlide;
