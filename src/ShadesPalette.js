import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './PaletteFooter';
import { Link } from 'react-router-dom';

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

  changeFormat = (format) => {
    this.setState({ format });
  };

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map((shade) => (
      <ColorBox
        key={shade.name}
        name={shade.name}
        color={shade[this.state.format]}
        showLink={false}
        // id={shade.id}
        // paletteId={this.props.palette.id}
      />
    ));

    return (
      <div className='ShadesPalette Palette'>
        <Header
          changeFormat={this.changeFormat}
          format={this.state.format}
          showSlider={false}
        />
        <div className='Palette-colors'>
          {colorBoxes}
          <div className='go-back ColorBox'>
            <Link to={`/palette/${id}`} className='back-button'>
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default ShadesPalette;
