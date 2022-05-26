import React from "react";
import PropTypes from "prop-types";

const Picture = ({ src, className, wrapper }) => {
  return (
    <picture className={wrapper}>
      <img className={className} src={src} alt="images" />
    </picture>
  );
};

Picture.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  wrapper: PropTypes.string,
};

Picture.defaultProps = {
  src: null,
  className: null,
  wrapper: null,
};

export default Picture;
