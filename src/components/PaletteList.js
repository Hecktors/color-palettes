import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles';

function PaletteList({ classes, palettes, history, deletePalette }) {

  const miniPalettes = palettes.map((palette) => (
    <CSSTransition
      key={palette.id}
      classNames="fade"
      timeout={2000}
    >
      <MiniPalette
        {...palette}
        key={palette.id}
        handleClick={() => goToRoute(palette.id)}
        deletePalette={() => deletePalette(palette.id)}
      />
    </CSSTransition>
  ));

  const goToRoute = (id) => history.push(`/palette/${id}`);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palettes</h1>
          <Link to='/palette/new'>Create new Palette</Link>
        </nav>
        {/* <div className={classes.palettes}> */}
        <TransitionGroup className={classes.palettes}>
          {miniPalettes}
        </TransitionGroup>
        {/* </div> */}
      </div>
    </div >
  );
}

export default withStyles(styles)(PaletteList);
