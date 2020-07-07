import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/DraggableColorBoxStyles'

const DraggableColorBox = SortableElement(({ handleClick, classes, color, name }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span>
          <DeleteIcon onClick={handleClick} className={classes.deleteIcon} />
        </span>
      </div>
    </div>
  );
}
);

export default withStyles(styles)(DraggableColorBox);
