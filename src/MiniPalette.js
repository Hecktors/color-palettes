import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const colorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.colorBox}
      style={{ backgroundColor: color.color }}
    />
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colorBoxes}>{colorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
