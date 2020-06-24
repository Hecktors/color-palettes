import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {}
});


function PaletteFormNav(props) {
  const [newPaletteName, setNewPaletteName] = useState('');
  const { classes, open, palettes, handleSubmit, setOpen } = props

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      palettes.every(
        (palette) =>
          palette.paletteName.toLowerCase().replace(/ /g, '') !==
          value.toLowerCase().replace(/ /g, '')
      )
    );

  })
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
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={setOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={clsx(classes.title)}>
            Create A Palette
            </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
            <TextValidator
              placeholder="Palette Name"
              value={newPaletteName}
              onChange={(e) => setNewPaletteName(e.target.value)}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Palette Name is required',
                'Name already exists',
              ]}
            />
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
              </Button>
          </ValidatorForm>
          <Link to="/">
            <Button variant='contained' color='secondary' >Go Back</Button>
          </Link>

        </div>
      </AppBar>
    </div >
  )
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)



