import React, { useEffect, useState } from 'react';
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
    <div>
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
            Persistent drawer
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
              <Link to="/">
                <Button variant='contained' color='secondary' >Go Back</Button>
              </Link>
            </ValidatorForm>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav
