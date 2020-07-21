import React from 'react';
import PropTypes from 'prop-types';

import { wrapper } from './index.module.css';

const Quote = ({
  attribution,
  message,
  textColor
}) => (
  <div className={wrapper}>
    <h2 style={{ color: textColor || "inherit" }}>
      { message }
    </h2>
    <h3>
      { attribution.split('\n').map((line) => [
        <span key='span'>{line}</span>, 
        <br key='break' />
      ])}
    </h3>
  </div>
);

Quote.propTypes = {
  attribution: PropTypes.string,
  message: PropTypes.string,
  textColor: PropTypes.string
};

export default Quote;