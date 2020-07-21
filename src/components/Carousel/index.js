import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Arrow from './Arrow';
import Quote from '../Quote';

import "slick-carousel/slick/slick.css";

import { dots, wrapper } from './index.module.css';

const Carousel = ({
  quotes,
  textColor
}) => {
  return (
    <div className={wrapper}>
      <Slider
        addArrowClickHandler
        arrows
        dots
        dotsClass={dots}
        infinite
        nextArrow={<Arrow next />}
        prevArrow={<Arrow />}
        >
        {quotes.map((item, i) => (
          <Quote key={i} textColor={textColor} {...item} />
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  quotes: PropTypes.array,
};

export default Carousel