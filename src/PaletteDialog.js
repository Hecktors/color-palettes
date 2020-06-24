import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteDialog({ palettes, handleSubmit }) {
  const [open, setOpen] = React.useState(false);
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      palettes.every(
        (palette) =>
          palette.paletteName.toLowerCase().replace(/ /g, '') !==
          value.toLowerCase().replace(/ /g, '')
      )
    );
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
