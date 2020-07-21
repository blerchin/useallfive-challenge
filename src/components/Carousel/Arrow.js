import React from 'react';
import PropTypes from 'prop-types';

import { arrow, arrowRight } from './arrow.module.css';

const Arrow = ({
  next = false,
  onClick
}) => (
  <div className={`${arrow} ${next ? arrowRight : ''}`}>
    <button onClick={onClick}>{next ? 'Next' : 'Previous'}</button>
  </div>
);

Arrow.propTypes = {
  next: PropTypes.bool,
  onClick: PropTypes.func
};

export default Arrow;