import React, { Component } from 'react';
import './PaletteList.css';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
    const links = this.props.palettes.map((palette) => (
      <Link key={palette.id} to={`/palette/${palette.id}`}>
        {palette.paletteName}
      </Link>
    ));

    return (
      <div className='PaletteList'>
        <h1>Choose A Color Palette</h1>
        {links}
      </div>
    );
  }
}

export default PaletteList;
