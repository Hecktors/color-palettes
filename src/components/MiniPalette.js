import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';


function MiniPalette({ classes, paletteName, paletteId, emoji, colors, handleClick, deletePalette }) {
  const colorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.colorBox}
      style={{ backgroundColor: color.color }}
    />
  ));

  const handleDelete = (e) => {
    e.stopPropagation();
    deletePalette();
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.btnDelete} onClick={handleDelete}>Delete Palette</DeleteIcon>
      <div className={classes.colorBoxes}>{colorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div >
  );
}

export default withStyles(styles)(MiniPalette);
