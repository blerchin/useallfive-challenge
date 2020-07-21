import React from 'react';
import PropTypes from 'prop-types';

import { image, imageLeft, wrapper } from './index.module.css';

const ImgBackground = ({
  position = 'left',
  src
}) => (
  <div className={wrapper}>
      <img alt="A+A Logo" className={`${image} ${position ==='left' ? imageLeft : ''}`} src={src} />
  </div>
);

ImgBackground.propTypes = {
  position: PropTypes.string,
  src: PropTypes.string
};

export default ImgBackground;