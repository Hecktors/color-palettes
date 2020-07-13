import React, { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';

function Palette({
  palette: { colors, paletteName, id, emoji },
  classes,
}) {

  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState('hex')

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
    <div className={classes.Palette}>
      <Header
        paletteName={paletteName}
        emoji={emoji}
        changeLevel={setLevel}
        changeFormat={() => setFormat(format)}
        level={level}
        format={format}
        showSlider
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      {/* <Footer paletteName={paletteName} emoji={emoji} /> */}
    </div>
  );
}

export default withStyles(styles)(Palette);
