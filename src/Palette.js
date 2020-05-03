import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox key={uuid()} {...color} />
    ));
    return (
      <div className='Palette'>
        {/* Navbar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
