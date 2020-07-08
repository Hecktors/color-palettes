import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ShadesPaletteStyles';
import clsx from 'clsx';

function ShadesPalette({ palette, classes, colorId, palette: { paletteName, emoji, id } }) {
  const [format, setFormat] = useState('hex')

  const gatherShades = (palette, colorId) => {
    let shades = [];
    for (let key in palette.colors) {
      shades.push(
        ...palette.colors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  }

  const _shades = gatherShades(palette, colorId);

  const colorBoxes = _shades.map((shade) => (
    <ColorBox
      key={shade.name}
      name={shade.name}
      color={shade[format]}
      showLink={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Header
        changeFormat={() => setFormat(format)}
        format={format}
        showSlider={false}
      />
      <div className={classes.ShadesPalette}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`} className={classes.backButton}>
            Go Back
            </Link>
        </div>
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}


export default withStyles(styles)(ShadesPalette);
