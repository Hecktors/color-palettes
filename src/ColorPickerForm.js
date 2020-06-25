import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColorBtn: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem"
  },
  colorNameInp: {
    width: "100%",
    height: "70px",
  }
}

function ColorPickerForm(props) {
  const { classes, colors, paletteIsFull, addNewColor } = props
  const [newColor, setNewColor] = useState({ color: 'teal', name: '' });

  ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
    colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
  );
  ValidatorForm.addValidationRule('isColorUnique', (value) =>
    colors.every(({ color }) => color !== newColor.color)
  );

  const handleSubmit = () => {
    addNewColor(newColor)
    setNewColor({ ...newColor, name: '' })
  }
  return (
    <div>
      <ChromePicker
        color={newColor.color}
        onChangeComplete={(c) => setNewColor({ ...newColor, color: c.hex })}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          className={classes.colorNameInp}
          label="Color Name"
          value={newColor.name}
          variant="filled"
          margin="normal"
          onFocus={(e => e.target.select())}
          onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'This field is required',
            'Color name must be unique',
            'Color already used',
          ]}
        />
        <Button
          className={classes.addColorBtn}
          disabled={paletteIsFull}
          type='submit'
          variant='contained'
          color='primary'
          style={{ backgroundColor: paletteIsFull ? 'grey' : newColor.color }}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  )
}

export default withStyles(styles)(ColorPickerForm);
