import React from 'react';

const SkeletonIcon = () => {
  return (
    <>
      <rect x="0" y="5" rx="5" ry="5" width="92" height="47" />
      <rect x="0" y="115" rx="5" ry="5" width="237" height="28" />
      {[0, 55, 110, 165, 220].map((x, index) => (
        <rect
          key={`svg-rect-${index + 1}`}
          x={x}
          y="177"
          rx="0"
          ry="0"
          width="41"
          height="41"
        />
      ))}
      <rect x="0" y="277" rx="5" ry="5" width="202" height="28" />
      {[21, 77, 133, 189, 245].map((cx, index) => (
        <circle key={`svg-circle-${index + 1}`} cx={cx} cy="360" r="21" />
      ))}
      <rect x="0" y="440" rx="0" ry="0" width="68" height="68" />
      <rect x="79" y="438" rx="0" ry="0" width="270" height="70" />
    </>
  );
};

export default SkeletonIcon;
