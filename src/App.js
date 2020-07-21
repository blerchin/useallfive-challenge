import React from 'react';

import Carousel from './components/Carousel';

import carouselData from './assets/data.json';
import asterisk from './assets/asterisk.svg';

import SvgBackground from './components/SvgBackground';

import { segment, segmentPrimary } from './App.module.css';
import CtaButton from './components/CtaButton';

function App() {
  return (
    <div className="App">
      {carouselData.map(({ backgroundPosition, ctaText, quotes, section_title, textColor, primary }, i) => (
        <div key={i} className={`${segment} ${primary ? segmentPrimary : ''}`}>
          <SvgBackground src={asterisk} position={backgroundPosition} />
          <h5>
            { section_title }
          </h5>
          <Carousel
            quotes={quotes}
            textColor={textColor}
            />
          {ctaText && <CtaButton text={ctaText} />}
        </div>
      ))}
    </div>
  );
}

export default App;
