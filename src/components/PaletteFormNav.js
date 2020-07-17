import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/PaletteFormNavStyles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PaletteDialog from './PaletteDialog';

function PaletteFormNav({ classes, palettes, handleSubmit, isOpen, setIsOpen }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar className={classes.toolbar}>

          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={setIsOpen}
            edge='start'
            className={clsx(classes.menuButton, isOpen)}
          >
            {!isOpen && <ChevronRightIcon />}
          </IconButton>
          <Typography variant='h6' noWrap className={clsx(classes.title)}>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          {/* <Link to="/"> */}
          {/* <Button variant='contained' color='secondary' className={classes.navBtn}>Go Back</Button> */}
          {/* </Link> */}
          <Button variant="contained" color="primary" className={classes.navBtn} onClick={() => setIsDialogOpen(true)}>
            Save
          </Button>
        </div>
      </AppBar>
      {
        <PaletteDialog
          palettes={palettes}
          handleSubmit={handleSubmit}
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
        />
      }
    </div >
  );
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);