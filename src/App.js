import React from 'react';

import Carousel from './components/Carousel';

import carouselData from './assets/data.json';
import asterisk from './assets/asterisk.svg';

import './App.css';
import SvgBackground from './components/SvgBackground';

function App() {
  return (
    <div className="App">
      {carouselData.map(({ backgroundPosition, quotes, section_title, textColor, primary }, i) => (
        <div key={i} style={{ position: 'relative' }}>
          <SvgBackground src={asterisk} position={backgroundPosition} />
          <h5 style={{ fontWeight: primary ? 'bold' : 'inherit' }}>
            { section_title }
          </h5>
          <Carousel
            quotes={quotes}
            textColor={textColor}
            />
        </div>
      ))}
    </div>
  );
}

export default App;
