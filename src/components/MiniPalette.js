import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';


function MiniPalette({ classes, paletteName, paletteId, emoji, colors, handleClick, openDialog }) {
  const colorBoxes = colors.map((color) => (
    <div
      key={color.name}
      className={classes.colorBox}
      style={{ backgroundColor: color.color }}
    />
  ));

  const handleDelete = (e) => {
    e.stopPropagation();
    openDialog();
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
      <div className={classes.colorBoxes}>
        <DeleteIcon className={classes.btnDelete} onClick={handleDelete}>Delete Palette</DeleteIcon>
        {colorBoxes}
      </div>
    </div >
  );
}

export default withStyles(styles)(MiniPalette);
