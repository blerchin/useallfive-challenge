import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCarousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { arrow, arrowDisabled, arrowRight, dot, wrapper } from './index.module.css';

const Arrow = ({
  right = false,
  disabled = false
}) => (
  <button className={`${arrow} ${right ? arrowRight : ''} ${disabled ? arrowDisabled : ''}`} />
);

const Dot = ({
}) => (
  <button className={dot} />
);

const Carousel = ({
  logoPosition = 'right',
  quotes,
  title
}) => {
  return (
    <div className={wrapper}>
      <h5>{ title }</h5>
      <ReactCarousel
        addArrowClickHandler
        arrows
        arrowLeft={<Arrow />}
        arrowLeftDisabled={<Arrow disabled />}
        arrowRight={<Arrow right />}
        arrowRightDisabled={<Arrow disabled right />}
        dots
        infinite
        >
        {quotes.map(({ message, attribution }, i) => (
          <div key={i}>
            <h2>
              { message }
            </h2>
            <h3>
              { attribution.split('\n').map((line) => [
                <span key='span'>{line}</span>, 
                <br key='break' />
              ])}
            </h3>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

Carousel.propTypes = {
  logoPosition: PropTypes.string,
  quotes: PropTypes.array,
  title: PropTypes.string
};

export default Carousel