/* eslint-disable react/prop-types */
import React from "react";

const Picture = ({ src, className }) => {
  return (
    <picture>
      <img className={className} src={src} alt={src} />
    </picture>
  );
};

export default Picture;
