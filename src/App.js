import React from 'react';
import './App.css';
import palettes from './seedColors';
import Palette from './Palette';

function App() {
  return (
    <div className='App'>
      <Palette {...palettes[1]} />
    </div>
  );
}

export default App;
