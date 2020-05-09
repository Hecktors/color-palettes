import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: '#fff',
    padding: '0.5rem',
    margin: '20px',
    position: 'relative',
    border: '1px solid #999',
    borderRadius: '5px',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  colorBoxes: {
    height: '150px',
    width: '100%',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  colorBox: {
    display: 'inline-block',
    width: '20%',
    height: '25%',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.5rem',
    fontSize: '1rem',
  },
  emoji: {},
};

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
