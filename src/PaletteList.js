import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToRoute = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { classes } = this.props;
    const miniPalettes = this.props.palettes.map((palette) => (
      <MiniPalette
        key={palette.id}
        {...palette}
        handleClick={() => this.goToRoute(palette.id)}
      />
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
