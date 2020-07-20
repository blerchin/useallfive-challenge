import React from 'react';

import Carousel from './components/Carousel';

import carouselData from './data.json';

import './App.css';

function App() {
  return (
    <div className="App">
      {carouselData.map(({ quotes, section_title }, i) => (
        <Carousel
          key={i}
          logoPosition={i % 2 === 0 ? 'right' : 'left'}
          quotes={quotes}
          title={section_title}
          />
      ))}
    </div>
  );
}

export default App;
