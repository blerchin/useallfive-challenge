import React from 'react';

import Carousel from './components/Carousel';

import carouselData from './data.json';

import './App.css';

function App() {
  return (
    <div className="App">
      {carouselData.map(({ quotes, section_title, textColor, primary }, i) => (
        <>
          <h5 style={{ fontWeight: primary ? 'bold' : 'inherit' }}>
            { section_title }
          </h5>
          <Carousel
            key={i}
            logoPosition={i % 2 === 0 ? 'right' : 'left'}
            quotes={quotes}
            textColor={textColor}
            />
        </>
      ))}
    </div>
  );
}

export default App;
