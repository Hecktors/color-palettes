import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Header.css';

import Slider from 'rc-slider';

class Header extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className='Header'>
        <div className='logo'>
          <a href='/'>color palette</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              onChange={changeLevel}
              min={100}
              max={900}
              defaultValue={level}
              step={100}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
