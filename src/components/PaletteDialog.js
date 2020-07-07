import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';

function PaletteDialog({ palettes, handleSubmit, showForm, setShowForm }) {
  const [newPaletteName, setNewPaletteName] = useState('');
  const [emoji, setEmoji] = useState('🤙')
  const [stage, setStage] = useState("form")

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
    setShowForm(false);
    setStage('form')
    setNewPaletteName('')
  };

  const handleContinue = () => setStage("emoji")

  return (
    <div>

      <Dialog open={showForm && stage === "emoji"} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Emoji</DialogTitle>

        <Picker onClick={(emoji) => setEmoji(emoji.native)} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button variant='contained' color='primary' type='button' onClick={() => handleSubmit(newPaletteName, emoji)}>
            Save Palette
              </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showForm && stage === "form"} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleContinue}>
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
              Continue
              </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>

    </div>
  );
}

export default PaletteDialog;