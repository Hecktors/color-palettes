import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import './PaletteList.css';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100',
    justifyContent: 'space-between',
    color: '#fff',
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

class PaletteList extends Component {
  render() {
    const { classes } = this.props;
    const miniPalettes = this.props.palettes.map((palette) => (
      <MiniPalette key={palette.id} {...palette} />
    ));

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Choose A Color Palette</h1>
          </nav>
          <div className={classes.palettes}>{miniPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
