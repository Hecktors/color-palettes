import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import Footer from './PaletteFooter';

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex',
  };

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = (format) => {
    this.setState({ format });
  };

  render() {
    const { colors, paletteName, id, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={uuid()}
        {...color}
        color={color[format]}
        paletteId={id}
        showLink
      />
    ));

    return (
      <div className='Palette'>
        <Header
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          level={level}
          format={format}
          showSlider
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
