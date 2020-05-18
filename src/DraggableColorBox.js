import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    // with: '270px',
    // height: '200px',
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
  },
};

function DraggableColorBox({ classes, color, name }) {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
