import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';

class ShadesPalette extends Component {
  _shades = this.gatherShades(this.props.palette, this.props.colorId);
  state = {
    format: 'hex',
  };

  gatherShades(palette, colorId) {
    let shades = [];
    for (let key in palette.colors) {
      shades.push(
        ...palette.colors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  }

  // changeLevel = (level) => {
  //   this.setState({ level });
  // };

  // changeFormat = (format) => {
  //   this.setState({ format });
  // };

  render() {
    // name, color, id, paletteId;
    const colorBoxes = this._shades.map((shade) => (
      <ColorBox
        key={shade.hex}
        name={shade.name}
        color={shade[this.state.format]}
        showLink={false}
        // id={shade.id}
        // paletteId={this.props.palette.id}
      />
    ));
    console.log('shades:', this._shades);

    return (
      <div className='Palette'>
        {/* <Header
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          level={level}
          format={format}
        /> */}
        <div className='Palette-colors shades'>{colorBoxes}</div>
      </div>
    );
  }
}

export default ShadesPalette;
