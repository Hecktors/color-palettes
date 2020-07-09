import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PaletteDialog from './PaletteDialog'
import styles from '../styles/PaletteFormNavStyles'

function PaletteFormNav({ classes, palettes, handleSubmit, open, setOpen }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={setOpen}
            edge='start'
            className={clsx(classes.menuButton, open)}
          >
            {!open &&
              < ChevronRightIcon />
            }
          </IconButton>
          <Typography variant='h6' noWrap className={clsx(classes.title)}>
            Create A Palette
            </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button variant='contained' color='secondary' className={classes.navBtn}>Go Back</Button>
          </Link>
          <Button variant="contained" color="primary" className={classes.navBtn} onClick={() => setShowForm(true)}>
            Save
      </Button>
        </div>
      </AppBar>
      {
        <PaletteDialog
          palettes={palettes}
          handleSubmit={handleSubmit}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      }
    </div >
  )
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);