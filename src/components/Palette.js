import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';
import Header from './Header';
import ColorBox from './ColorBox';

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
      linkIsShown
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
    </div>
  );
}

export default withStyles(styles)(Palette);
