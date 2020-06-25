import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteDialog({ palettes, handleSubmit, formShowing, setFormShowing }) {
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

  const handleClose = () => {
    setFormShowing(false);
  };

  return (
    <Dialog open={formShowing} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Choose a palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. Make sure it's unique!
            </DialogContentText>
          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            fullWidth
            margin="normal"
            onChange={(e) => setNewPaletteName(e.target.value)}
            validators={['required', 'isPaletteNameUnique']}
            errorMessages={[
              'Palette Name is required',
              'Name already exists',
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            Save Palette
              </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
