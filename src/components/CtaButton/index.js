import React from 'react';
import PropTypes from 'prop-types';

import { button } from './index.module.css';

const CtaButton = ({ text }) => (
  <button className={button}>
    <span className='ctaText'>{text}</span>
  </button>
);

CtaButton.propTypes = {
  text: PropTypes.string
};

export default CtaButton;