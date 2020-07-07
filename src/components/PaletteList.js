import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles';

function PaletteList({ classes, palettes, history, deletePalette }) {

  const miniPalettes = palettes.map((palette) => (
    <MiniPalette
      key={palette.id}
      {...palette}
      handleClick={() => goToRoute(palette.id)}
      deletePalette={() => deletePalette(palette.id)}
    />
  ));

  const goToRoute = (id) => history.push(`/palette/${id}`);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Choose A Color Palette</h1>
          <Link to='/palette/new'>Create new Palette</Link>
        </nav>
        <div className={classes.palettes}>{miniPalettes}</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
